const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');


router.route("/fetchDepartment/:customDepartment")
.get((req,res)=>{
    let today = new Date();
    let day
    let month
    let year = today.getFullYear();

    if(String(today.getDate()) == "1"){
        day = "31"
        month = String(today.getMonth()).padStart(2, '0');
    }
    else{
        day = String(today.getDate() - 1).padStart(2, '0');
        month = String(today.getMonth() + 1).padStart(2, '0');
    }
    console.log(day);
    today = year + '-' + month + '-' + day;
    let url = `https://dashboard.covid19.data.gouv.fr/data/date-${today.substring(0,10)}.json`
    console.log(url);
    let settings = {method: "Get"};

    fetch(url, settings)
        .then(res => res.json())
        .then((result) => {
            result.forEach(resultat => {
                let department = resultat.code
                let subDepartment = department.substring(4,6)
                if(subDepartment == req.params.customDepartment){
                    console.log(resultat);
                    res.send(resultat)
                }
            });
        });
});

module.exports = router;