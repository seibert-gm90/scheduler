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
    updateCurrentTime()


    var ul = $("#timeSlots")
    var li = $(".hourSlot")
    var saveButton = $(".save")
    var inputVal = $(".userText").val();
    var valArray = [""]

    function valueCheck() {

        for (var i = 0; i < ul.length; i++) {
            $(".userText").val();
            var inputVal = $(".userText").val();
            valArray.push(inputVal)
        }
        valueCheck()
    }

    $(".save").click(function () {
        event.preventDefault();
        var index = $(this).attr("data-slot")
        var input = $(".userText")[index]
        var task = $(input).val() 
        localStorage.setItem("valArray", task)
        // $(localStorage.getItem('valArray', JSON.stringify(myObj));
        // var user = JSON.parse(localStorage.getItem('user'));
    })
})
