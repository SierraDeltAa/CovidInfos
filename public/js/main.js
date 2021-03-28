// SELECT DEPARTMENT

$('#selectDepartment').on('change', function(e){
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    console.log("option :", valueSelected);
    $.ajax({
        type: "GET",
        url: "./fetchDepartment/"+valueSelected,
        success : (responseDepartment)=>{
            let dataDepartment = responseDepartment;
            console.log(dataDepartment);
            $("#depH").text(dataDepartment.hospitalises);
            $("#depG").text(dataDepartment.gueris);
            $("#depD").text(dataDepartment.deces);
            $("#depR").text(dataDepartment.reanimation);
            $("#depNewH").text(dataDepartment.nouvellesHospitalisations);
            $("#depNewR").text(dataDepartment.nouvellesReanimations);
        }
    })
});

// SELECT DATE

$("#selectDate").on('change', function(e){
    var optionSelected = $("input:value", this);
    var valueSelected = this.value;
    console.log("date :", valueSelected);
    $.ajax({
        type: "GET",
        url: "./fetchDate/"+valueSelected,
        success : (responseDate)=>{
            let dataDate = responseDate;
            let hospitalisesTotal = 0;
            let guerisTotal = 0;
            let decesTotal = 0;
            let reanimationsTotal = 0;
            let nouvellesHospitalisationsTotal = 0;
            let nouvellesReanimationsTotal = 0;
            dataDate.forEach(department => {
                hospitalisesTotal += department.hospitalises;
                guerisTotal += department.gueris;
                decesTotal += department.deces;
                reanimationsTotal += department.reanimation;
                nouvellesHospitalisationsTotal += department.nouvellesHospitalisations;
                nouvellesReanimationsTotal += department.nouvellesReanimations;
            });
            hospitalisesTotal = Math.floor(hospitalisesTotal/= 3);
            guerisTotal = Math.floor(guerisTotal/= 3);
            decesTotal = Math.floor(decesTotal/= 3);
            reanimationsTotal = Math.floor(reanimationsTotal/= 3);
            nouvellesHospitalisationsTotal = Math.floor(nouvellesHospitalisationsTotal/= 3);
            nouvellesReanimationsTotal = Math.floor(nouvellesReanimationsTotal/= 3);
            $("#dateH").text(hospitalisesTotal);
            $("#dateG").text(guerisTotal);
            $("#dateD").text(decesTotal);
            $("#dateR").text(reanimationsTotal);
            $("#dateNewH").text(nouvellesHospitalisationsTotal);
            $("#dateNewR").text(nouvellesReanimationsTotal);

        }
    })
})

