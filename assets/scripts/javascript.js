moment().format();


$ (document).ready(function(){
    var currentHour = moment().format("h a");
    var currentDate = moment().format("dddd, MMMM Do YYYY");
//display date and time
$("#todaysDate").text(currentDate)
})