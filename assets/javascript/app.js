$(document).ready(function () {
    $('#quiz').hide();
    $('#submit').hide();
    $('#correct').hide();
    $('#incorrect').hide();
    $('#timer').hide();

    var time = 45;

    var final = ["Mercury", "Tokoyo", "Femur", "Nine", "Elephant", "Cancer", "Pacific", "64", "English", "Diamond"];
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
        },
        {
            question: "What is the largest bone in the body?",
            answers: ['Sternum', 'Scapula', 'Femur', 'Skull'],
            correctAnswer: "Femur",
        },
        {
            question: "The average body contains how many pints of blood?",
            answers: ['Nine', 'One', 'Sixteen', 'Six'],
            correctAnswer: "Nine",
        },
        {
            question: "Which is the only mammal that can't jump?",
            answers: ['Giraffe', 'Cat', 'Cheetah', 'Elephant'],
            correctAnswer: "Elephant",
        },
        {
            question: "What horoscope sign is a crab?",
            answers: ['Leo', 'Scorpio', 'Cancer', 'Virgo'],
            correctAnswer: "Cancer",
        },
        {
            question: "Which is the largest ocean",
            answers: ['Pacific', 'Atlantic', 'Indian', 'Artic'],
            correctAnswer: "Pacific",
        },
        {
            question: "How many squares are there on a chess board?",
            answers: ['10', '164', '64', '85'],
            correctAnswer: "64",
        },
        {
            question: "Which language has the most words?",
            answers: ['Spanish', 'Italian', 'German', 'English'],
            correctAnswer: "English",
        },
        {
            question: "What is the hardest rock?",
            answers: ['Diamond', 'Marble', 'Flint', 'Dacite'],
            correctAnswer: "Diamond",
        },


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
                //console.log(radioValue0);
                //console.log(radioValue1);

                userAnswers[0] = $("input[name='answers0']:checked").val();
                userAnswers[1] = $("input[name='answers1']:checked").val();
                userAnswers[2] = $("input[name='answers2']:checked").val();
                userAnswers[3] = $("input[name='answers3']:checked").val();
                userAnswers[4] = $("input[name='answers4']:checked").val();
                userAnswers[5] = $("input[name='answers5']:checked").val();
                userAnswers[6] = $("input[name='answers6']:checked").val();
                userAnswers[7] = $("input[name='answers7']:checked").val();
                userAnswers[8] = $("input[name='answers8']:checked").val();
                userAnswers[9] = $("input[name='answers9']:checked").val();


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
            else { incorrect++ }
        }
        console.log(correct)
    }




    function timeOut() {
        $(this).hide();
        $('#quiz').hide();
        $('#timer').hide();
        $('#submit').hide();
        calcScore();
        $('#correct').text("Correct: " + correct);
        $('#incorrect').text("Incorrect: " + incorrect);
        $('#correct').show();
        $('#incorrect').show();
        $('#timeout').text("Time's Up!")
    }




























});



