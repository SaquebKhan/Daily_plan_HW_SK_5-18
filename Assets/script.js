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
    $(".time-display").each(function(){
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < currentTime) {
            $(this).addClass("past");
        }
        else if (blockHour === currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
    })
}
})

// load things in from local storage, repeat once it works
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
//repeat for all hours

//Add date to top using Moment JS

$('#currentDay').text(moment().format("LOOK AT MOMENT DOCUMENTATION AND CHOOSE THE FORMAT THAT YOU LIKE"))

// })