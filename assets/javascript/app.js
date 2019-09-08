$(document).ready(function () {
    $('#quiz').hide();
    $('#submit').hide();
    $('#results').hide();
    $('#timer').hide();

    function startTimer() {
        var intervalId
        var time = 30;
        intervalId = setInterval(countDown, 1000);
        function countDown() {
            if (time < 1) {
                clearInterval(intervalId);
                userTimeout();
            }
            if (time > 0) {
                time--;
            }
            $('#timer').text(time);
        }
    }


    function startGame() {
        $('#start').on("click", function () {
            $(this).hide();
            $('#timer').show();
            $('#quiz').show();
            $('#submit').show();
            startTimer();
        });
    };

startGame();






































});



//Upon "Start" selection, display quiz and begin timer
//Log user answers
//Upon "Submit" selection, display results
    //Number of Correct/Incorrect

//iF timer runs out, show results





//1. Start Button
    //Disappears on click
    //Quiz displays
    //Timer Starts

//2. Quiz


//3. End Game
    //Either timer runs out or player selects Submit button
        //Quiz disappears
        //Results Display


