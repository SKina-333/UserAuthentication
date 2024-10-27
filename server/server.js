const express = require('express');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
require("dotenv").config();

const database = require("./configs/postgres");
const loginRouter = require("./routers/loginRouter");
const indexRouter = require("./routers/indexRouter");

const app = express();


app.use(express.json());
app.use(session({

    store: new pgSession({
        pool : database,                // Connection pool
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        maxAge: 60000 * 60 * 24 * 7 // 1 week in milliseconds
    
    } // Change to true in production environment to enable HTTPS
}));

app.use("/login", loginRouter);
app.use("/", indexRouter);


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port ${process.env.SERVER_PORT}`);
});