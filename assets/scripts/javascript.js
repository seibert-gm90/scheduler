moment().format();


$(document).ready(function () {
    var currentHour = moment().format("hh:mm:ss A");
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    //display date and time
    $("#todaysDate").text(currentDate)
    $("#currentTime").text(currentHour)
    //console.log(currentDate)
   
})

function updateCurrentTime(){
var updatedTime = setInterval(function() {
    currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#todaysDate").text(currentDate);
    currentHour = moment().format("hh:mm:ss A");
    $("#currentTime").text(updatedTime);
}, 1000);
};
updateCurrentTime()


var ul = $("#timeSlots")
var li = $(".hourSlot")
var saveButton = $(".save")
var inputVal = $(".hourSlot").val();
var valArray = [""]

function valueCheck() {

    for (var i = 0; i < ul.length; i++) {
        $(".hourSlot").val();
        var inputVal = $(".hourSlot").val();
        valArray.push(inputVal)
    }

}

function saveLocalStorage() {
    saveButton.click(function () {
        event.preventDefault();
        $(".hourSlot").val();
        localStorage.setItem('storeObj', JSON.stringify(myObj));
        var user = JSON.parse(localStorage.getItem('user'));
    })}; 