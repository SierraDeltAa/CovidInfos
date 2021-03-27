// SELECT DEPARTMENT

$('#selectDepartment').on('change', function(e){
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    console.log("option :", valueSelected);
    $.ajax({
        type: "GET",
        url: "./fetch/"+valueSelected,
        success : (response)=>{
            let data = response;
            console.log(data);
            $("#depH").text(data.hospitalises);
            $("#depG").text(data.gueris);
            $("#depD").text(data.deces);
            $("#depR").text(data.reanimation);
            $("#depNewH").text(data.nouvellesHospitalisations);
            $("#depNewR").text(data.nouvellesReanimations);
        }
    })
});

