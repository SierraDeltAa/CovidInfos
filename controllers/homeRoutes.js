const express = require("express");
const router = express.Router();
const https = require("https");


router.route("/")
.get((req,res)=>{
    https.get("https://coronavirusapi-france.now.sh/FranceLiveGlobalData",(response)=>{
        response.on("data",(data)=>{
            let result = JSON.parse(data);
            let resultat = result.FranceGlobalLiveData;
            const today = resultat[0].date;
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
                hospitalises:resultat[0].hospitalises,
                reanimations:resultat[0].reanimation,
                newHospitalisations:resultat[0].nouvellesHospitalisations,
                newReanimations:resultat[0].nouvellesReanimations,
                deces:resultat[0].deces,
                gueris:resultat[0].gueris
            })
        })
    })
});

module.exports = router;