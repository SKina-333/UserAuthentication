const {Router} = require("express");
const passport = require("passport");

const {createUser} = require('../controllers/userController');

const loginRouter = Router();

loginRouter.get('/',(req, res) => {res.send("Welcome to Login Page")});
loginRouter.post(
    "/",
    (req, res, next) => {
      passport.authenticate(
        "local", 
        {
          failureRedirect: "/login"
        },
        (err, user, info) => {
          if (err) {
            return next(err);
          }
          if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
          }
          req.logIn(user, (err) => {
            if (err) {
              return next(err);
            }
            return res.json({ username: user.username });
          });
        }
      )(req, res, next);
    }
    
);

loginRouter.post('/new', createUser);
loginRouter.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return res.status(500).json({ error: "Logout failed" });
    }
    res.json({ message: "Logout successful" });
  });
});


module.exports = loginRouter;

