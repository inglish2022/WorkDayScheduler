$(document).ready(function ()  {//tells engine to load 1) html & 2)css first
    //display current day and time
    $("#currentDay").text(moment().format("MMMM DD YYYY, h:mm:ss a")); //moment.js
    //assign saveBtn
    $(".saveBtn").on("click", function ()  {
        console.log(this);
        var text = $(this).siblings(".toDo").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    //load any saved data from LocalStorage - do this for each hour
    $("#hour7 .toDo").val(localStorage.getItem("hour7"));
    $("#hour8 .toDo").val(localStorage.getItem("hour8"));
    $("#hour9 .toDo").val(localStorage.getItem("hour9"));
    $("#hour10 .toDo").val(localStorage.getItem("hour10"));
    $("#hour11 .toDo").val(localStorage.getItem("hour11"));
    $("#hour12 .toDo").val(localStorage.getItem("hour12"));
    $("#hour13 .toDo").val(localStorage.getItem("hour13"));
    $("#hour14 .toDo").val(localStorage.getItem("hour14"));
    $("#hour15 .toDo").val(localStorage.getItem("hour15"));
    $("#hour16 .toDo").val(localStorage.getItem("hour16"));
    $("#hour17 .toDo").val(localStorage.getItem("hour17"));
    $("#hour18 .toDo").val(localStorage.getItem("hour18"));
    $("#hour19 .toDo").val(localStorage.getItem("hour19"));

    function hourTracker()  {
        var currentHour = moment().hour();  //moment.js

        $(".time-block").each(function ()  {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour)

            if (blockHour  < currentHour)  {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour)  {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else    {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})