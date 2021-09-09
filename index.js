var highScores = [{
    name: "divs",
    score: 5,
  },
  {
    name: "Jagriti",
    score: 4
  }]
  var score = 0;
  var input = require('readline-sync');
  var userName = input.question("what's your name?")
  console.log("Welcome " + userName);
  console.log("How well do you Know India?")
  function play(question, answer) {
    var ans = input.question(question);
    if (ans.toUpperCase() === answer.toUpperCase()) {
      score += 1;
      console.log("Correct");
    }
    else {
      console.log("Wrong")
    }
    console.log("Your score is: " + score)
    console.log(".......................");
  }
  
  var questions = [{
    question: "What is the capital of India: ",
    answer: "Delhi"
  }, {
    question: "How many states are there?  ",
    answer: "28"
  },
  {
    question: "Who is the Prime minsiter of India? ",
    answer: "Narendra Modi"
  },
  {
    question : "when did India got Independence?",
    answer : "15 August 1947"
  },
  {
    question: "Who was India's first Prime minister?",
    answer:"Jawahar Lal Nehru"
  }]
  for (var i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer);
  }
  
  console.log("Highest scores are: ")
  for (var i = 0; i < highScores.length; i++) {
    console.log(highScores[i].name + " " + highScores[i].score);
  }
  console.log("If you have scored higher please send me screenshot so that i can add your name");
  