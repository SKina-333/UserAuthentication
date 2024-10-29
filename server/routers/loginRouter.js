const {Router} = require("express");
const passport = require("passport");

const {createUser} = require('../controllers/userController');

const loginRouter = Router();

loginRouter.get('/',(req, res) => {res.send("Welcome to Login Page")});
loginRouter.post(
    "/",
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureMessage: true
    }),
    function(req, res) {
      res.redirect('/protected-route');
    }
  );

loginRouter.post('/new', createUser);


module.exports = loginRouter;

