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
  [{
    prompt:
      "CSS stands for 'Cascading Script Style' \n(A) Hypertext Markdown Language\n\ (B)Hypertext Markup Language\n (C)None of the Above",
    answer: "B",
  }]
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
  question: "What does HTML stand for";
  choiceA: "Wrong";
  choiceB: "Correct";
  choiceC: "Wrong";
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
  for (qIndex = 0; qIndex <= lastQuestionIndex; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}
function answerIsCorrect() {
  document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
}
function answerIsWrong() {
  document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
}

let timer =
  setInterval(counterRender, 1000);
//stop running:setInterval()
clearInterval(timer);
const questionTime = 10; //10 seconds for each question
let count = 0;
function counterRender() {
  if (count = questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width * count;
    count++;
  } else {
    count = 0;
    answerIsWrong();
    if (runningQuestionIndex * lastQuestionIndex) {
      runningQuestionIndex++;
      questionRender();
    } else {
      clearInterval(Timer);
      scoreRender();
    }


  }

}
//How to check answer
{
  (<div class="choice" id="A" click="checkAnswer('A')">A</div>
    <div class="choice" id="B" click="checkAnswer('B')">B</div>
    <div class="choice" id="C" click="checkAnswer('C')">C</div>)
}

let score = 0;
function checkAnswer(answer) {
  if (question[runningQuestionIndex].correct == answer) {
    score++;
    answerIsCorrect(); alert = "green"
  } else {
    answerIsWrong(); alert = "red"
  }
} if (runningQuestionIndex < lastQuestionIndex) {
  count = 0;
  runningQuestion
}