var questions = [{
        question: "When did the New York Subway system begin operation?",
        answers: [{
            answer: "1904",
            correct: true
        }, {
            answer: "1940",
            correct: false
        }, {
            answer: "1908",
            correct: false
        }, {
            answer: "1980",
            correct: false
        }],
        correctAnswer: "New York Subway began operation in 1904",
        image: "./assets/images/subway.jpg"
    }, {
        question: "Who is the mayor of New York?",
        answers: [{
            answer: "Michael Bloomberg",
            correct: false
        }, {
            answer: "Rudy Giuliani",
            correct: false
        }, {
            answer: "Bill de Blasio",
            correct: true
        }, {
            answer: "William Bratton",
            correct: false
        }],
        correctAnswer: "Mayor of the New York is Bill de Blasio",
        image: "./assets/images/mayor.jpg"
    }, {
        question: "What years did the Mets win the world seires?",
        answers: [{
            answer: "1968, 2002",
            correct: false
        }, {
            answer: "1969. 1986",
            correct: true
        }, {
            answer: "1948, 1997",
            correct: false
        }, {
            answer: "1971, 1989",
            correct: false
        }],
        correctAnswer: "Mets won world series on 1969, 1986",
        image: "./assets/images/121.jpg"
    },

    {
        question: "What is the population of New York City",
        answers: [{
            answer: "Over 8.4 million",
            correct: false
        }, {
            answer: "Over 8.5 million",
            correct: true
        }, {
            answer: "Over 7.5 illion",
            correct: false
        }, {
            answer: "Over 7.4 million",
            correct: false
        }],
        correctAnswer: "NYC have over 8.5 million people.",
        image: "./assets/images/population.jpg"
    },
    {
        question: "How many cities are there in New York?",
        answers: [{
            answer: "62",
            correct: true
        }, {
            answer: "52",
            correct: false
        }, {
            answer: "42",
            correct: false
        }, {
            answer: "32",
            correct: false
        }],
        correctAnswer: "There are 62 cities in New York.",
        image: "./assets/images/cities.jpg"
    },
    {
        question: "On October 29 and 30, 2012, what hurricane caused extensive destruction of the state's shorelines,  a record-high storm surge, with severe flooding and more??",
        answers: [{
            answer: "Hurricane Sandy.",
            correct: true
        }, {
            answer: "Hurricane Irene. ",
            correct: false
        }, {
            answer: "Hurricane Mathews. ",
            correct: false
        }, {
            answer: "Hurricane Auther",
            correct: false
        }],
        correctAnswer: "On 2012, hurricane Sandy caused extensive destruction of the state",
        image: "./assets/images/sandy.jpg"
    }
]
var count = 0;
var time;
var number = 30;
var correctAnswers = 0;
var wrongAnswers = 0;
var unaswered = 0;


$("#start").on("click", function () {
    $("#start").css("display", "none");
    //  $("#intro").empty();
    diaplayQuestions();
});

function diaplayQuestions() {

    console.log(count === questions.length);
    if (count === questions.length) {
        console.log(count);
        triviaResults();
    } else {
        clearInterval(time);
        number = 30;
        $("#intro").html(questions[count].question);
        $("#timer").html("<h3>You have " + number + " seconds left</h3>");
        $("#choices").empty();

        for (var i = 0; i < questions[count].answers.length; i++) {
            answerText = i + 1 + ". " + questions[count].answers[i].answer;

            var a = $("<button>");
            // Adding a class
            a.addClass("btn btn-outline-secondary answer");
            // Adding a data-attribute with a value of the answer at index i
            a.attr("correct", questions[count].answers[i].correct);
            // Providing the button's text with a value of the answer at index i
            a.text(answerText);
            // Adding the button to the HTML
            $("#choices").append(a);
            $("#choices").append("<br>");
        }

        clearInterval(time);
        time = setInterval(decrement, 1000);
    }
}

function checkAnswer() {
    clearInterval(time);

    answer = questions[count].correctAnswer;
    $("#timer").empty();
    $("#choices").html('<img src = "' + questions[count].image +
        '" attr = "' + questions[count].image +
        'height =120px width=200px">');

    if ($(this).attr("correct") === "true") {
        correctAnswers++;
        $("#intro").html("You guessed right. " + answer);
        $("choices").empty()
    } else if ($(this).attr("correct") === "false") {
        wrongAnswers++;
        $("#intro").html("Your guess was wrong. " + answer);
    } else {
        $("#intro").html("Times up! " + answer);
    }

    count++;

    var next = $("<button>");
    // Adding a class
    next.addClass("next");
    next.text("Next");
    $("#choices").append("<br> <br>");
    $("#choices").append(next);

}

function decrement() {

    //  Decrease number by one.
    number--;
    //  Show the number in the #timer tag.
    if (number === 1) {
        $("#timer").html("<h3>You have " + number + " second left</h3>");
    }

    //  Once number hits zero...
    else if (number === 0) {
        unaswered++;
        number = 30;
        checkAnswer();
    }
    else {
        $("#timer").html("<h3>You have " + number + " seconds left</h3>");
    }
}

function triviaResults() {
    var resultHTML = "<h3>Final results</h3>" +
        "<div>Correct guesses: " + correctAnswers + "</div>" +
        "<div>Wrong guesses: " + wrongAnswers + "</div>" +
        "<div>Unanswered questions: " + unaswered + "</div>";
    console.log(resultHTML);
    $("#timer").html(resultHTML);
    $("#choices").empty();
    $("#intro").empty();
}

$(document).on("click", ".answer", checkAnswer);
$(document).on("click", ".next", diaplayQuestions);