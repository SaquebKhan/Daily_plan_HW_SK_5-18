$(document).ready(function(){
    $(".saveBtn").on('click', function(){
        // set variables for my values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // var demo = $(this).siblings().attr(‘value’);
    localStorage.setItem(time, value);
})

timeUpdater();
// create function to update time as application runs
function timeUpdater(){

    var currentTime = moment().hours();
    $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < currentTime) {
            $(this).addClass("past");
        }
        else if (blockHour == currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}
})

// load things in from local storage, repeat once it works
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
//repeat for all hours

//Add date to top using Moment JS

$('#currentDay').text(moment().format("MMMM Do YYYY, h:mm:ss a"))

// })