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
        var time = $(this).parent().attr("id")
        console.log(time)
        var task = $(this).siblings("input").val() 
        console.log(task)
        writeLocalStorage(time,task)
       
        
    })

   function writeLocalStorage(time,text){
       var events = readLocalStorage()
       events[time] = text
       console.log(events)
       localStorage.setItem('storeObj', JSON.stringify(events));
   }

   function readLocalStorage(){
    var getObject = JSON.parse(localStorage.getItem('storeObj'));
    if (getObject===null){
        getObject = {}
    }
    console.log(getObject)
    return getObject
    
   }
   
   function loadLocalStorage(){
       var scheduleEvents = readLocalStorage()
       for (let prop in scheduleEvents) {
        if (Object.prototype.hasOwnProperty.call(scheduleEvents, prop)) {
            console.log(prop)
            console.log(scheduleEvents[prop])
            var elementID = prop
            var textValue = scheduleEvents[prop] 
            $(`#${elementID}`).children("input").val(textValue)
            
            
        }
    }
   }
   loadLocalStorage()

})
