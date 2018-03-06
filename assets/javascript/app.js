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
    }]
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
    }]
}]
 var count = 0;

$("#start").on("click", function () {
    $("#start").css("display","none");
    $("#intro").empty();
    diaplayQuestions();
});

function diaplayQuestions(){
    $("#intro").html(questions[count].question);
    $("#choices").empty();
    
    for(var i = 0; i< questions[count].answers.length; i++){
        answerText = i+1+". "+questions[count].answers[i].answer;
        console.log( questions[count].answers.length);

        var a = $("<button>");
        // Adding a class
        a.addClass("btn btn-outline-secondary");
         // Adding a data-attribute with a value of the answer at index i
         a.attr("correct",questions[count].answers[i].correct);
        // Providing the button's text with a value of the answer at index i
        a.text(answerText);
        // Adding the button to the HTML
        $("#choices").append(a);
        $("#choices").append("<br>");

    }
}