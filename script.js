// grabbing ids
var giveDirections = document.getElementById("directions");
var scoreEl = document.getElementById("score");
var finalEl = document.getElementById("final");
var endEl = document.getElementById("end");
var questionHere = document.getElementById("questionHere");
var countEl = document.getElementById("count");
var startQuizEl = document.getElementById("startQuiz");
var resultszel = document.getElementById("results");
var scoreBoardEl = document.getElementById("scoreBoard");
var initialsEl = document.getElementById("initials");
var leaderBoardEl = document.getElementById("leaderBoard");
var endGame = document.getElementById("endButtons");
var enterEl = document.getElementById("enter");
var leaderScoreEl = document.getElementById("leaderScore");
var alpha = document.getElementById("a");
var beta = document.getElementById("b");
var charlie = document.getElementById("c");
var delta = document.getElementById("d");

// questions for the quiz
var askQuestions = [
    {
        question: "Where in the HTML file is the CSS file placed?",
        pickA: "Body",
        pickB: "Footer",
        pickC: "Head",
        pickD: "Div",
        answer: "c"
    },
    {
        question: "What is a boolean?",
        pickA: "A file",
        pickB: "A data type with 2 possible choices",
        pickC: "A numeric variable",
        pickD: "A tag for HTML",
        answer: "b"
    },
    {
        question: "How many body elements can be in one HTML file?",
        pickA: "2",
        pickB: "6",
        pickC: "3",
        pickD: "1",
        answer: "d"
    },
    {
        question: "What tag would you use to add a image?",
        pickA: "<img>",
        pickB: "<div>",
        pickC: "<p>",
        pickD: "section",
        answer: "a"
    },
    {
        question: "What is href used for?",
        pickA: "to add font",
        pickB: "to store data",
        pickC: "to change background color",
        pickD: "to create link to another page",
        answer: "d"
    },
    {
        question: "How are Javascript files saved?",
        pickA: ".css",
        pickB: ".html",
        pickC: ".js",
        pickD: ".png",
        answer: "c"
    }

];

//other variables
var allQuestoins = askQuestions.length;
var currentOne = 0;
var timeOnClock = 91;
var score = 0;
var correct;
var interval;

//showing the questions
function showQuestion() {
    
}
