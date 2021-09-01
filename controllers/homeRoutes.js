const { json } = require("express");
const express = require("express");
const router = express.Router();
const { parse } = require("path");
const fetch = require('node-fetch');


router.route("/")
.get((req,res)=>{
    let url = "https://dashboard.covid19.data.gouv.fr/data/code-FRA.json"
    let settings = {method: "Get"};

    fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            
            const result = json[json.length-1]
            const today = result.date;
            const year = today.substring(0,4);
            const month = today.substring(5,7);
            const day = today.substring(8,10);
            const newDate = new Date(Date(year, month, day));
            const options = {
                    weekday:"long",
                    year:"numeric",
                    month:"long",
                    day:"numeric"
                }
            const stringDate = newDate.toLocaleDateString("fr-FR", options);

            res.render("index",
            {
                today:stringDate,
                contamines:result.casConfirmes,
                newHospitalisations:result.nouvellesHospitalisations,
                hospitalises:result.hospitalises,
                newReanimations:result.nouvellesReanimations,
                reanimations:result.reanimation,
                deces:result.deces,
                gueris:result.gueris,
                newPremieresInjections:result.nouvellesPremieresInjections,
                cumulPremieresInjections:result.cumulPremieresInjections
            })
        });

});

module.exports = router;