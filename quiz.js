//our questions
var questions = [
  {
    prompt:
      "if you want to store local items you have to \n(A) Save it\n (B) Stringify it\n(C) Commit to github",
    answer: "B",
  },
][
  {
    prompt:
      "An array is \n(A) A function\n (B) A collection of like or similar items\n (C) An index",
    answer: "B",
  }
];

let questions = {};
question: "if you want to store local items you have to ?";
choiceA: "Wrong";
choiceB: "Correct";
choiceC: "Wrong";
correct: "B";

{
  question: "An array is";
  choiceA: "Wrong";
  choiceB: "Correct";
  choiceC: "Wrong";
  correct: "B";
}

{
  question: " CSS stands for 'Cascading Script Style'";
  choiceA: "Wrong";
  choiceB: "Correct";
  correct: "B";
}
{
}

//Select All Elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

array = [a, b, c];
array.length(3);

let lastQuestionIndex = question.length - 1;
let runningQuestionIndex = 0;

function renderQuestion() {
  let q = questions[runningQuestionIndex];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}
function progressRender() {
  for (let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}
function answerIsCorrect() {
  document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
}
function answerIsWrong() {
  document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
}
