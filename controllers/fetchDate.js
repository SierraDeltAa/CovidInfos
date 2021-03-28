const express = require("express");
const router = express.Router();
const https = require("https");


router.route("/fetchDate/:customDate")
.get((req,res)=>{
    let url = "https://coronavirusapi-france.now.sh/AllDataByDate?date="+req.params.customDate;
    https.get(url,(response)=>{
        let data;
        response.on("data",(chunk)=>{
            if(!data){
                data = chunk;
            }
            else{
                data += chunk;
            }
        });
        response.on("end",()=>{
            const result = JSON.parse(data);
            const resultat = result.allFranceDataByDate;
            console.log(resultat);
            res.send(resultat);
        })
    });
});

module.exports = router;