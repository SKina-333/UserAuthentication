const express = require('express');
var cors = require('cors')
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);



require("dotenv").config();
const { passport } = require('./middlewares/passport');

const database = require("./configs/postgres");
const loginRouter = require("./routers/loginRouter");
const indexRouter = require("./routers/indexRouter");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",  // Your frontend URL
    credentials: true
}));
app.use(session({

   
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true, 
    store: new pgSession({
        pool : database,                // Connection pool
    }),
    cookie: { 
        
        maxAge: 60000 * 60 * 24 * 7 // 1 week in milliseconds
    
    } // Change to true in production environment to enable HTTPS
}));









app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    console.log("Session data:", req.session);
    next();
});
app.use("/login", loginRouter);
app.use("/", indexRouter);

app.get('/protected-route', (req, res) => {
    if (req.isAuthenticated()) {
        res.send("Welcome to the protected route!");
    } else {
        
        res.redirect("/login");
    }
  });

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port ${process.env.SERVER_PORT}`);
});