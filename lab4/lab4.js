const quizQuestions = [
  { question: "What is the capital of India?", answer: "delhi" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What color is the sky?", answer: "blue" }
];

function runQuiz() {
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);

    if (userAnswer) {
      userAnswer = userAnswer.toLowerCase().trim();
    }

    if (userAnswer === quizQuestions[i].answer) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
    }
  }

  alert("Quiz finished! Your final score is " + score + " out of " + quizQuestions.length);
}

runQuiz();
