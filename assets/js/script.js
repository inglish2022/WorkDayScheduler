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
    $("#hour7am .toDo").val(localStorage.getItem("hour7am"));
    $("#hour8am .toDo").val(localStorage.getItem("hour8am"));
    $("#hour9am .toDo").val(localStorage.getItem("hour9am"));
    $("#hour10am .toDo").val(localStorage.getItem("hour10am"));
    $("#hour11am .toDo").val(localStorage.getItem("hour11am"));
    $("#hour12pm .toDo").val(localStorage.getItem("hour12pm"));
    $("#hour1pm .toDo").val(localStorage.getItem("hour1pm"));
    $("#hour2pm .toDo").val(localStorage.getItem("hour2pm"));
    $("#hour3pm .toDo").val(localStorage.getItem("hour3pm"));
    $("#hour4pm .toDo").val(localStorage.getItem("hour4pm"));
    $("#hour5pm .toDo").val(localStorage.getItem("hour5pm"));
    $("#hour6pm .toDo").val(localStorage.getItem("hour6pm"));
    $("#hour7pm .toDo").val(localStorage.getItem("hour7pm"));

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