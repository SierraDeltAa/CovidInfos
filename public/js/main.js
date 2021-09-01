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
            $("#depNewI").text(dataDepartment.nouvellesPremieresInjections);
            $("#depI").text(dataDepartment.cumulPremieresInjections);
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
            console.log(dataDate);
            $("#dateC").text(dataDate.casConfirmes);
            $("#dateH").text(dataDate.hospitalises);
            $("#dateG").text(dataDate.gueris);
            $("#dateD").text(dataDate.deces);
            $("#dateR").text(dataDate.reanimation);
            $("#dateNewH").text(dataDate.nouvellesHospitalisations);
            $("#dateNewR").text(dataDate.nouvellesReanimations);
            $("#dateNewI").text(dataDate.nouvellesPremieresInjections);
            $("#dateI").text(dataDate.cumulPremieresInjections);

        }
    })
})

