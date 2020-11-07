var startButton = document.getElementById("start-button");
var questions = [{
  question: "If you want to store local items you ?",
  answers: {
    A: "Save it",
    B: "Stringify it",
    C: "Commit to Github"

  },

  correctAnswer: "B"
},
{
  question: " An array is ?",
  answers: {
    A: "A function",
    B: "A collection of like or similar items",
    C: "An index"

  },
  correctAnswer: "B"
},
{
  question: "'CSS' stands for 'Cascading Script Style'",
  answers: {
    A: "True",
    B: "False"
  },
  correctAnswer: "B"
},
{
  question: "Who invented Javascript?",
  answers: {
    A: "John Backus",
    B: "Brendon Eich",
    C: "Ada Lovelace"

  },
  correctAnswer: "B"
},
{
  question: "Which is NOT a programming language?",
  answers: {
    A: "Java",
    B: "ES Python",
    C: "Ruby"
  },
  correctAnswer: "B"
},
{
  question: "What does 'var' mean?",
  answers: {
    A: "variance",
    B: "variable",
    C: "vaporware"
  },
  correctAnswer: "B"

}



];
var correctCounter = 0;
var questionCounter = 0;
var cardBody = document.getElementById("questions");
var timeEl = document.getElementById("secondsLeft");
var secondsLeft = 60;
var scoreEl = 0;
function showQuestions() {
  cardBody.innerHTML = "";
  var question = document.createElement("p");
  question.textContent = questions[questionCounter].q;
  var questionDiv = document.createElement("div");
  questionDiv.append(question);
  for (var i = 0; i < questions[questionCounter].a.length; i++) {
    var button = document.createElement("button");
    button.textContent = questions[questionCounter].a[i];
    button.setAttribute("class", "btn btn-primary answers");
    questionDiv.append(button);
  }
  cardBody.append(questionDiv);
}

startButton.addEventListener("click", function (event) {
  event.preventDefault();
  startButton.style.display = "none";
  showQuestions();
  //   console.log("you clicked it");
});

document.addEventListener("click", function (event) {
  console.log(event.target.className);
  if (event.target.className.includes("answers")) {
    console.log("this is the answer button");
    console.log(event.target.textContent);
    if (event.target.textContent === questions[questionCounter].c) {
      cardBody.append("correct");
      correctCounter++;
      scoreEl++;
    } else {
      cardBody.append("incorrect");
    }
    questionCounter++;

    //end game function here
    if (questionCounter >= questions.length) {
      scoreCard();
    } else {
      setTimeout(function () {
        showQuestions();
      }, 2000);
    }
  }

  function timer() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }
  timer();
  //another conditional for the submit high score
});

function scoreCard() {
  document.innerHTML = "";
  var scoreCardEL = document.createElement("h2");
  scoreCardEL.textContent = "High Scores";
  var scoreCardP = document.createElement("p");
  scoreCardP.textContent = "Your Score Is!!!";
  console.log("score card is calling");
  cardBody.append(scoreCardEL, scoreCardP);
}







// function generateQuiz(question, quizContainer, resultsContainer, submit)

// function showQuestions(questions, quizContainer) {
//   // code for questions
//   var output = [];
//   var answers;

//   for (var i = 0; i < questions.length; i++) {

//     answers = [];
//     // For loop for each available answer to the question
//     for (letter in question[i].answers) {

//     }
//   }


// }
// function showResults(questions, quizContainer, resultsContainer) {

//   // code for results goes here
// }

// // the questions
// showQuestions(questions, quizContainer);

// // When the user clicks submit, show results
// submitButton.onclick = function () {
//   showResults(questions, quizContainer, resultsContainer);

// }




// // //Select All Elements
// const start = document.getElementById("start");
// const quiz = document.getElementById("quiz");
// const question = document.getElementById("question");
// const counter = document.getElementById("counter");
// const timeGauge = document.getElementById("timeGauge");

// const choiceA = document.getElementById("A");
// const choiceB = document.getElementById("B");
// const choiceC = document.getElementById("C");

// array = [a, b, c];
// array.length(3);

// let lastQuestionIndex = question.length - 1;
// let runningQuestionIndex = 0;

// function renderQuestion() {
//   let q = questions[runningQuestionIndex];
//   question.innerHTML = "<p>" + q.question + "</p>";
//   choiceA.innerHTML = q.choiceA;
//   choiceB.innerHTML = q.choiceB;
//   choiceC.innerHTML = q.choiceC;
// }
// function progressRender() {
//   for (qIndex = 0; qIndex <= lastQuestionIndex; qIndex++) {
//     progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
//   }
// }
// // function answerIsCorrect() {
// document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
// // }
// // function answerIsWrong() {
// //   document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
// // }

// // let timer =
// //   setInterval(counterRender, 1000);
// // //stop running:setInterval()
// // clearInterval(timer);
// // const questionTime = 10; //10 seconds for each question
// // let count = 0;
// // function counterRender() {
// //   if (count = questionTime) {
// //     counter.innerHTML = count;
// //     timeGauge.style.width * count;
// //     count++;
// //   } else {
// //     count = 0;
// //     answerIsWrong();
// //     if (runningQuestionIndex * lastQuestionIndex) {
// //       runningQuestionIndex++;
// //       questionRender();
// //     } else {
// //       clearInterval(Timer);
// //       scoreRender();
// //     }


// //   }

// // }
// // //How to check answer
// // // {
// // //   (<div class="choice" id="A" click="checkAnswer('A')">A</div>
// // //     <div class="choice" id="B" click="checkAnswer('B')">B</div>
// // //     <div class="choice" id="C" click="checkAnswer('C')">C</div>)
// // // }

// // let score = 0;
// // function checkAnswer(answer) {
// //   if (question[runningQuestionIndex].correct == answer) {
// //     score++;
// //     answerIsCorrect(); alert = "green"
// //   } else {
// //     answerIsWrong(); alert = "red"
// //   }
// // } if (runningQuestionIndex < lastQuestionIndex) {
// //   count = 0;
// //   runningQuestion
// // }