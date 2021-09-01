const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');


router.route("/")
.get((req,res)=>{
    let departmentsUrl = "https://geo.api.gouv.fr/departements"
    let settings = {method: "Get"};

    fetch(departmentsUrl, settings)
        .then(res => res.json())
        .then((result) => {
            res.render("department",
            {
                departmentList:result
            });
        });
})


module.exports = router;