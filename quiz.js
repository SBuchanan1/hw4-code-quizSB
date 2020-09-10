//our questions
var questions = [
    {
        prompt:"if you want to store local items you have to \n(A) Save it\n\ (B) Stringify it\n\(C) Commit to github",
        answer: "B"
    }
    
    {
        prompt:"An array is \n(A) A function\n\ (B) A collection of like or similar items\n\ (C) An index",
        answer: "B"
    }
]

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
const choiceB = document.getElementById('B');
const choiceC = document.getElementById("C");
