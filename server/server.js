const express = require('express');
// const session = require('express-session');
require("dotenv").config();


const loginRouter = require("./routers/loginRouter");
const indexRouter = require("./routers/indexRouter");

const app = express();


app.use(express.json());


app.use("/login", loginRouter);
app.use("/", indexRouter);
// app.get("/", (req, res) => res.send("Hello, world!"));

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port ${process.env.SERVER_PORT}`);
});