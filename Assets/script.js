// $(document).ready(function(){
    $(“.saveBtn”).on(‘click’, function(){
        // set variables for my values
    var value = $(this).siblings(‘.userInput’).val();
    var time = $(this).parent().attr(‘id’);
    // var demo = $(this).siblings().attr(‘value’);
    localStorage.setItem(time, value);
})
// create function to update time as application runs
function timeUpdater(){
    var currentTime = moment().hours();
    $(‘.time-display’).each(function(){
        var blockHour = parseInt($(this).attr(‘id’).split(‘-’)[1]);
        if (blockHour < currentTime) {
            $(this).addClass(‘past’);
        }
        else if (blockHour === currentHour){
            $(this).removeClass(‘past’);
            $(this).addClass(‘present’);
        }
        else{
            $(this).removeClass(‘past’);
            $(this).removeClass(‘present’);
            $(this).addClass(‘past’);
        }
    })
}
timeUpdater();
// load things in from local storage, repeat once it works
$(‘#hour-8 .userInput’).val(localStorage.getItem(‘hour-8’));
// })