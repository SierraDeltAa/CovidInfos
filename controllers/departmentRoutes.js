const express = require("express");
const router = express.Router();
const https = require("https");


router.route("/")
.get((req,res)=>{
    https.get("https://geo.api.gouv.fr/departements",(response)=>{
        response.on("data",(data)=>{
            let result = JSON.parse(data);
            res.render("department",
            {
                departmentList:result
            });
        })
    })
})


module.exports = router;