$(document).ready(function () {
    $('#quiz').hide();
    $('#submit').hide();
    $('#results').hide();
    $('#correct').hide();
    $('#incorrect').hide();
    $('#timer').hide();

    var time = 3;

    var final = ["Mercury", "Tokoyo"];
    var userAnswers = [];

    var questionNumber = 0;
    var questions = [
        {
            question: "Which of these planets is closet to the sun?",
            answers: ['Mercury', 'Earth', 'Mars', 'Saturn'],
            correctAnswer: "Mercury",
        },
        {
            question: "What city has the largest population?",
            answers: ['Tokoyo', 'New York City', 'Shanghai', 'Paris'],
            correctAnswer: "Tokoyo",
        }

    ];

    function startTimer() {
        var intervalId

        intervalId = setInterval(countDown, 1000);
        function countDown() {
            if (time < 1) {
                clearInterval(intervalId);
                timeOut();
            }
            if (time > 0) {
                time--;
            }
            $('#timer').text("Time Remaining: " + time + "s");




        }
    }


    function startGame() {
        //When user selects Start Button
        $('#start').on("click", function () {
            //Hide Start Button
            $(this).hide();
            //Show Timer
            $('#timer').show();
            //Start Timer
            startTimer();
            //Show Quiz
            $('#quiz').show();
            //Show Submit Button
            $('#submit').show();

        });
    };

    //Display question with radio buttons for each choice for each question
    function showQuestion() {
        for (i = 0; i < questions.length; i++) {
            $('#quiz').append(
                "<form id='trivia'>",
                "<fieldset id='group[i]''>",
                "<p>" + questions[questionNumber].question + "</p>" +
                "<p> <input type='radio' name='answers" + [i] + "'class='choices' value='" + questions[questionNumber].answers[0] + "'>" + " " + questions[questionNumber].answers[0] + "</p>",
                "<p> <input type='radio' name='answers" + [i] + "'class='choices' value='" + questions[questionNumber].answers[1] + "'>" + " " + questions[questionNumber].answers[1] + "</p>",
                "<p> <input type='radio' name='answers" + [i] + "'class='choices' value='" + questions[questionNumber].answers[2] + "'>" + " " + questions[questionNumber].answers[2] + "</p>",
                "<p> <input type='radio' name='answers" + [i] + "'class='choices' value='" + questions[questionNumber].answers[3] + "'>" + " " + questions[questionNumber].answers[3] + "</p>",
                "</form>"
            );
            questionNumber++;
        }


        //Get the value of the radio button selected
        function results() {
            $("input[type='radio']").click(function () {
                var radioValue0 = $("input[name='answers0']:checked").val();
                var radioValue1 = $("input[name='answers1']:checked").val();
                console.log(radioValue0);
                console.log(radioValue1);

                userAnswers.push($("input[name=answers0]:checked").val());
                userAnswers.push($("input[name=answers1]:checked").val());
                console.log(userAnswers)
            });
        }

        results();
    };



    showQuestion();

    startGame();




    function submit() {
        $('#submit').on("click", function () {
            $(this).hide();
            $('#quiz').hide();
            $('#timer').hide();
            $('#results').show();
            calcScore();
            $('#correct').text("Correct: " + correct);
            $('#incorrect').text("Incorrect: " + incorrect);
            $('#correct').show();
            $('#incorrect').show();

        });

    };
    submit();

    //Calculate score
    function calcScore() {
        correct = 0;
        incorrect = 0;

        //Run through each index of the userAnswer array to see if it matches the value in the same index of final array
        for (i = 0; i < final.length; i++) {
            if (userAnswers[i] === final[i])
                //If a match, increase correct by 1
                correct++;
        }
        console.log(correct)
    }




    function timeOut() {
        $(this).hide();
        $('#quiz').hide();
        $('#timer').hide();
        $('#submit').hide();
        $('#results').show();
        calcScore();
        $('#correct').text("Correct: " + correct);
        $('#incorrect').text("Incorrect: " + incorrect);
        $('#correct').show();
        $('#incorrect').show();
        $('#timeout').text("Time's Up!")}




























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


