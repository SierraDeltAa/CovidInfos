const express = require("express");
const router = express.Router();
const https = require("https");


router.route("/")
.get((req,res)=>{
    res.render("date")
})


module.exports = router;