const {Router} = require("express");

const indexRouter = Router();

indexRouter.get('/',(req, res) => {
    console.log(req.session);
    res.send("Welcome to Home Page")

});



module.exports = indexRouter;

