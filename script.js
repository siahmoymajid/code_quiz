//start button target

//event listener on click startsthequiz
var questionBank = [
  {
    prompt: "Inside which HTML element do we put the JavaScript?",
    answer: "<script>",
    options: ["<javascript>", "<js>", "scripting>"],
  },
  {
    prompt: "Where is the correct place to insert a JavaScript?",
    answer: "Both the <head> section and the <body> section",
    options: ["The <head> section", "The <body> section"],
  },
  {
    prompt: "How can you add a comment in a JavaScript?",
    answer: "//This is a comment",
    options: ["'This is a comment", "<!--This is a comment-->"],
  },
];

var currentIndex;


function startQuiz() {
  currentIndex = 0
  console.log("starting the quiz");
  //start the timer

  //hide our start screen
  //show our quiz screen
  //showQuestion()
}

function showQuestion() {
  console.log("displaying the questions");
  var currentQuestion = questionBank[currentIndex].prompt
  //when they select the answer

  // target the elemtn I want
  //change the text content to the value that I need it to be
  //add event listeners if I need to
  //append them where I need to append them
}

function checkTheAnswer() {
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
}

function gameOver() {
  // hide our quiz screen
  //show our endGame screen
  // endGame screen shows our score and prompts us to enter our initials via a form
  // need to have an event listener
}

function initialsSubmitted() {
  //save the initials and our score to Local Storage
}
