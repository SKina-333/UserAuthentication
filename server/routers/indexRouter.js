const {Router} = require("express");

const indexRouter = Router();

indexRouter.get('/',(req, res) => {
   

    res.send("Welcome to Home Page")

});



module.exports = indexRouter;

