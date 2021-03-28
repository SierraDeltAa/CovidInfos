const express = require("express");
const router = express.Router();
const https = require("https");


router.route("/fetchDepartment/:customDepartment")
.get((req,res)=>{
    let url = "https://coronavirusapi-france.now.sh/LiveDataByDepartement?Departement="+req.params.customDepartment;
    https.get(url,(response)=>{
        response.on("data",(data)=>{
            let result = JSON.parse(data);
            let resultat = result.LiveDataByDepartement[0];
            console.log(resultat);
            res.send(resultat);
        })
    })
});

module.exports = router;