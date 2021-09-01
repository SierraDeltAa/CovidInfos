const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');


router.route("/fetchDate/:customDate")
.get((req,res)=>{
    let url = `https://dashboard.covid19.data.gouv.fr/data/date-${req.params.customDate}.json`
    let settings = {method: "Get"};

    fetch(url, settings)
        .then(res => res.json())
        .then((result) => {
            console.log(result[result.length-1]);
            res.send(result[result.length-1]);

        });

    // https.get(url,(response)=>{
    //     let data;
    //     response.on("data",(chunk)=>{
    //         if(!data){
    //             data = chunk;
    //         }
    //         else{
    //             data += chunk;
    //         }
    //     });
    //     response.on("end",()=>{
    //         const result = JSON.parse(data);
    //         const resultat = result.allFranceDataByDate;
    //         console.log(resultat);
    //         res.send(resultat);
    //     })
    // });
});

module.exports = router;