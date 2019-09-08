$(document).ready(function () {
    $('#quiz').hide();
    $('#submit').hide();
    $('#results').hide();
    $('#timer').hide();


    var questionNumber = 0;
    var questions = [
        {
            question: "Which of these planets is closet to the sun?",
            answers: ['Mercury', 'Earth', 'Mars', 'Saturn'],
            correctAnswer: "Mercury",
        },
        {
            question: "What city has the largest population",
            answers: ['Tokoyo', 'New York City', 'Shanghai', 'Paris'],
            correctAnswer: "Tokoyo",
        }

    ];

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
            $('#timer').text("Time Remaining: " + time + "s");
        }
    }


    function startGame() {
        $('#start').on("click", function () {
            $(this).hide();
            $('#timer').show();
            $('#quiz').show();
            $('#submit').show();
            startTimer();
            function showQuestion() {
                
                for (i=0; i<questions.length; i++) { 
                $('#quiz').append(
                    "<p>" + questions[questionNumber].question + "</p>",
                    "<p> <input name= 'answers' type='radio'id='a1' class='choices'>" + " " + questions[questionNumber].answers[0] + "</p>",
                    "<p> <input name= 'answers' type='radio'id='a2' class='choices'>" + " " +  questions[questionNumber].answers[1] + "</p>",
                    "<p> <input name= 'answers' type='radio'id='a3' class='choices'>" + " " +  questions[questionNumber].answers[2] + "</p>",
                    "<p> <input name= 'answers' type='radio'id='a4' class='choices'>" + " " +  questions[questionNumber].answers[3] + "</p>");
                questionNumber ++;}
    
            }
            showQuestion();
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


