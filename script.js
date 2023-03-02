var currentIndex;
var startButton;
var quizContainer;
var scoreform;
var highscore;
var score 0;
var questionContainerEl=document.getElementById("questioncontainer")


//start button target

//event listener on click startsthequiz
var quizContainer = [
  {
    prompt: "Inside which HTML element do we put the JavaScript?",
    answer: "<script>",
    options: ["<javascript>", "<js>", "scripting>"],
  },
  
  {
    prompt: "How can you add a comment in a JavaScript?",
    answer: "//This is a comment",
    options: ["'This is a comment", "<!--This is a comment-->"],
  },
];


//hide our start screen
  //show our quiz screen
  //showQuestion()
function startQuiz() {
  const startButton = document.getElementById('start-button');
  startButton.style.display = "none";
  questionContainerEl.setAttribute('class","hide')
  questionContainerEl.removeAttribute('class');
   }

function showquestion() {
  console.log("displaying the question");
  const quizContainer = document.getElementById("quiz-container");
   }


  // add code here to display the quiz interface
}
 
const startButton = document.getElementById("start-button");
//start the timer
startButton.addEventListener('click',startQuiz)
 function startButton() {
  console.log ('Start button is clicked');

let timeEl=document.querySelector("#time");{

  }
var timeLeft = 60;
var timerElement = document.getElementById("timer");

var timer = setInterval(function() {
 if (timeLeft <= 0) {
clearInterval(timer);
alert("Time's up!");
document.querySelector("form").submit();
 } else {
 timerElement.textContent = timeLeft;
timeLeft--;
 }
 }, 1000);



  // target the elemtn I want
  //change the text content to the value that I need it to be
  //add event listeners if I need to
  //append them where I need to append them
}




  quizQuestions.forEach((question, index) => {
    const questionElem = document.createElement("h2");
    questionElem.textContent = `Question ${index + 1}: ${question.question}`;
    quizContainer.appendChild(questionElem);
    
    

// going to check if it's right or wrong
  //if it's wrong, deduct from secondsLeft or timeLeft
  //if(it's wrong){
  //   substract time
  // }
  // if(we have questions left or there is time left){
  //   currentIndex ++
  //   showQuestion()
  // } else{
  //   gameOver()
  // }
    question.options.forEach((option, optionIndex) => {
      const optionElem = document.createElement("button");
      optionElem.textContent = option;
      optionElem.addEventListener("click", () => {
        if (optionIndex === question.answer) {
          alert("Correct!");
        } else {
          alert("Incorrect!");
        }
      });
      quizContainer.appendChild(optionElem);
    });
  });
}


  
}

function gameOver() {
  // hide our quiz screen
  //show our endGame screen
  // endGame screen shows our score and prompts us to enter our initials via a form
  // need to have an event listener
}


  //save the initials and our score to Local Storage
const scoreForm = document.getElementById("score-form");
scoreForm.addEventListener("submit", event => {
  event.preventDefault();

  const initials = document.getElementById("initials").value;
  const score = calculateScore(); // add code here to calculate the user's score

  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  highScores.push({ initials, score });
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5); // keep only the top 5 scores

  localStorage.setItem("highScores", JSON.stringify(highScores));
});

function displayHighScores() {
  const highScoresList = document.getElementById("high-scores");
  highScoresList.innerHTML = "";

  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  highScores.forEach(score => {
    const scoreElem = document.createElement("li");
    scoreElem.textContent = `${score.initials}: ${score.score}`;
    highScoresList.appendChild(scoreElem);
  });
}
