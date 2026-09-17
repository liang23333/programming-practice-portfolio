/**
 * Interactive Quiz Engine
 */

const QUESTIONS = [
  {
    category: "JavaScript Fundamentals",
    question: "Which of the following methods creates a new array populated with the results of calling a provided function on every element?",
    options: ["Array.prototype.forEach()", "Array.prototype.map()", "Array.prototype.filter()", "Array.prototype.reduce()"],
    answerIndex: 1,
    explanation: ".map() returns a new array containing the transformed elements without mutating the original array."
  },
  {
    category: "Python Concepts",
    question: "In Python, which built-in data type is mutable and ordered?",
    options: ["tuple", "set", "list", "frozenset"],
    answerIndex: 2,
    explanation: "Lists in Python are mutable and preserve insertion order, whereas tuples are immutable and sets are unordered."
  },
  {
    category: "Git & Version Control",
    question: "Which git command is used to download commits, files, and refs from a remote repository into your local repo without merging them?",
    options: ["git pull", "git fetch", "git clone", "git push"],
    answerIndex: 1,
    explanation: "'git fetch' downloads remote changes without automatically merging them into your current branch."
  },
  {
    category: "Web & HTTP",
    question: "Which HTTP response status code signifies that the server successfully processed the request, but is not returning any content?",
    options: ["200 OK", "201 Created", "204 No Content", "304 Not Modified"],
    answerIndex: 2,
    explanation: "204 No Content indicates success with no message body returned."
  },
  {
    category: "Data Structures",
    question: "What is the average time complexity for searching a key in a standard Hash Table?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answerIndex: 0,
    explanation: "Hash table lookups average O(1) constant time with a well-distributed hash function."
  }
];

let currentIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const explanationBox = document.getElementById("explanation");
const nextBtn = document.getElementById("next-btn");
const categoryBadge = document.getElementById("category-badge");
const counterText = document.getElementById("counter");
const progressFill = document.getElementById("progress-fill");
const scoreIndicator = document.getElementById("score-indicator");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");
const finalScore = document.getElementById("final-score");
const feedbackText = document.getElementById("feedback-text");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion(index) {
  const q = QUESTIONS[index];
  questionText.textContent = q.question;
  categoryBadge.textContent = q.category;
  counterText.textContent = `${index + 1} / ${QUESTIONS.length}`;
  progressFill.style.width = `${((index) / QUESTIONS.length) * 100}%`;
  scoreIndicator.textContent = `Score: ${score}`;

  optionsContainer.innerHTML = "";
  explanationBox.classList.add("hidden");
  nextBtn.classList.add("hidden");

  q.options.forEach((optText, optIndex) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = optText;
    btn.addEventListener("click", () => handleSelectOption(optIndex, q));
    optionsContainer.appendChild(btn);
  });
}

function handleSelectOption(selectedIndex, question) {
  const buttons = optionsContainer.querySelectorAll(".option-btn");
  buttons.forEach((b) => (b.disabled = true));

  if (selectedIndex === question.answerIndex) {
    buttons[selectedIndex].classList.add("correct");
    score++;
  } else {
    buttons[selectedIndex].classList.add("incorrect");
    buttons[question.answerIndex].classList.add("correct");
  }

  scoreIndicator.textContent = `Score: ${score}`;
  explanationBox.textContent = `💡 ${question.explanation}`;
  explanationBox.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < QUESTIONS.length) {
    loadQuestion(currentIndex);
  } else {
    showResults();
  }
});

function showResults() {
  progressFill.style.width = "100%";
  quizScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");
  finalScore.textContent = `${score}/${QUESTIONS.length}`;

  const pct = (score / QUESTIONS.length) * 100;
  if (pct === 100) {
    feedbackText.textContent = "Outstanding! Perfect score on core programming concepts! 🚀";
  } else if (pct >= 60) {
    feedbackText.textContent = "Great job! Strong foundation across multiple topics. 👍";
  } else {
    feedbackText.textContent = "Good effort! Review the explanations and try again to reinforce your learning. 📚";
  }
}

restartBtn.addEventListener("click", () => {
  currentIndex = 0;
  score = 0;
  resultsScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  loadQuestion(0);
});

// Initialize on page load
loadQuestion(0);
