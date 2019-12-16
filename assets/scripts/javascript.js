//display date, time, and schedule on page load

$(document).ready(function () {
    var currentHour = moment().format("hh:mm:ss A");
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    //display date and time
    $("#todaysDate").text(currentDate)
    $("#currentTime").text(currentHour)
    //console.log(currentDate)
    //update page with current time as user is on site//

    function updateCurrentTime() {
        var updatedTime = setInterval(function () {
            var currentDate = moment().format("dddd, MMMM Do YYYY");
            var currentHour = moment().format("hh:mm:ss A");
            $("#todaysDate").text(currentDate);
            $("#currentTime").text(currentHour);
        }, 1000);
    };

    //function to show current time
    updateCurrentTime()


    var ul = $("#timeSlots")
    var li = $(".hourSlot")
    var saveButton = $(".save")
    var inputVal = $(".userText").val();
    var valArray = [""]


//function to grab user input values
    function valueCheck() {

        for (var i = 0; i < ul.length; i++) {
            $(".userText").val();
            var inputVal = $(".userText").val();
            valArray.push(inputVal)
        }
        valueCheck()
    }


//save to local storage
    $(".save").click(function () {
        event.preventDefault();
        var index = $(this).attr("data-slot")
        var input = $(".userText")[index]
        var task = $(input).val() 
        localStorage.setItem("valArray", task)
        userTextInput = JSON.parse(localStorage.getItem("valArray") || task);
        
    })

})
