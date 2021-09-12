// grabbing ids
var giveDirections = document.getElementById("directions");
var optionsEl = document.getElementById("options")
var scoreEl = document.getElementById("score");
var finalEl = document.getElementById("final");
var endEl = document.getElementById("end");
var questionsEl = document.getElementById("questions")
var questionHereEl = document.getElementById("questionHere");
var countEl = document.getElementById("count");
var startQuizEl = document.getElementById("startQuiz");
var resultsEl = document.getElementById("results");
var scoreBoardEl = document.getElementById("scoreBoard");
var initialsEl = document.getElementById("initials");
var leaderBoardEl = document.getElementById("leaderBoard");
var endbuttonsEl = document.getElementById("endButtons");
var enterEl = document.getElementById("enter");
var leaderScoreEl = document.getElementById("leaderScore");
var alpha = document.getElementById("a");
var beta = document.getElementById("b");
var charlie = document.getElementById("c");
var delta = document.getElementById("d");
var clearEl = document.getElementById("clear")

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
        pickA: "img",
        pickB: "div",
        pickC: "p",
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
var allQuestions = askQuestions.length;
var currentOne = 0;
var timeOnClock = 46;
var score = 0;
var correct;
var interval;

optionsEl.style.display = "none";
endEl.style.display = "none";
resultsEl.style.display = "none";
endbuttonsEl.style.display = "none";


//gets questions
function getQuestions() {

    endEl.style.display = "none";


    if (currentOne === allQuestions) {
        return showResults();
    }
    var firstOne = askQuestions[currentOne];
    questionHereEl.innerHTML = "<p>" + firstOne.question + "</p>";
    alpha.innerHTML = firstOne.pickA;
    beta.innerHTML = firstOne.pickB;
    charlie.innerHTML = firstOne.pickC;
    delta.innerHTML = firstOne.pickD;
};

//starts questions
function showQuestions() {
    endEl.style.display = "none";
    giveDirections.style.display = "none";

    getQuestions();

    interval = setInterval(function () {
        timeOnClock--;
        countEl.textContent = "Time:" + timeOnClock;

        if (timeOnClock === 0) {
            clearInterval(interval);
            showResults();
        }
    }, 1000);
    optionsEl.style.display = "block";

}

//displays score
function showResults() {
    optionsEl.style.display = "none";
    endEl.style.display = "flex";
    clearInterval(interval);
    initialsEl.value = "";
    finalEl.innerHTML = "You got " + score + " out of 6 correct!";
}

//scores/localstorage
enterEl.addEventListener("click", function highscore() {

    if (initialsEl.value === "") {
        alert("Enter your initials");
        return false;
    } else {
        var savedScore = JSON.parse(localStorage.getItem("savedScore")) || [];
        var currentId = initialsEl.value.trim();
        var currentHigh = {
            name: currentId,
            score: score
        };

        endEl.style.display = "none";
        resultsEl.style.display = "flex";
        scoreBoardEl.style.display = "block";
        endbuttonsEl.style.display = "flex";

        savedScore.push(currentHigh);
        localStorage.setItem("savedScore", JSON.stringify(savedScore));
        generateHigh();
    }
});

//generates high scores
function generateHigh() {
    leaderBoardEl.innerHTML = "";
    leaderScoreEl.innerHTML = "";

    var highScores = JSON.parse(localStorage.getItem("savedScore")) || {};

    for (i = 0; i < highScores.length; i++) {
        var newName = document.createElement("li");
        var newScore = document.createElement("li");
        newName.textContent = highScores[i].name;
        newScore.textContent = highScores[i].score;
        leaderBoardEl.appendChild(newName);
        leaderScoreEl.appendChild(newScore);
    }
}

//shows the highscores
function showHigh() {
    giveDirections.style.display = "none"
    endEl.style.display = "none";
    resultsEl.style.display = "flex";
    scoreBoardEl.style.display = "block";
    endbuttonsEl.style.display = "flex";

    generateHigh();
}

//clears the highscores click function on HTML
function clearData() {
    window.localStorage.clear();
    leaderBoardEl.textContent = "";
    leaderScoreEl.textContent = "";
}

//resets the quiz click function on HTML
function repeatQuiz() {
    resultsEl.style.display = "none";
    endEl.style.display = "none";
    endbuttonsEl.style.display = "none";
    giveDirections.style.display = "block";

    timeOnClock = 46;
    score = 0;
    currentOne = 0;
}

//checks the answers

function gradeAnswer(answer) {
    correct = askQuestions[currentOne].answer;

    if (answer === correct && currentOne !== allQuestions) {
        score++;

        alert("Correct");
        currentOne++;
        getQuestions();

    } else if (answer !== correct && currentOne !== allQuestions) {
        alert("Incorrect");
        currentOne++;
        getQuestions();
    } else {
        showResults();
    }
}




startQuizEl.addEventListener("click", showQuestions);

