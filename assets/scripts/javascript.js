moment().format();


$(document).ready(function () {
    var currentHour = moment().format("h a");
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    //display date and time
    $("#todaysDate").text(currentDate)
    //console.log(currentDate)
})

var ul = $("#timeSlots")
//var li = $(".hourSlot")
var saveButton = $(".save")


function valueCheck() {

    for (var i = 0; i < li.length; i++) {
        $(".hourSlot").val();
        console.log(valueCheck())
    }

}

function buttonClick() {
    preventDefault();
    saveButton.click(function () {
        localStorage.setItem('storeObj', JSON.stringify(myObj));


    });
}
