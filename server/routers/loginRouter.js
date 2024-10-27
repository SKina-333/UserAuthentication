const {Router} = require("express");

const loginRouter = Router();

loginRouter.get('/',(req, res) => {res.send("Welcome to Login Page")});
loginRouter.get('/new',(req, res) => {res.send("get request login page")});


module.exports = loginRouter;

