# 03 - Interactive Flashcard & Quiz App

> A client-side interactive quiz engine built with vanilla JavaScript, featuring state-driven questions, score progression, feedback loops, and dynamic results.

---

## 📌 Project Overview

Building an interactive quiz tests mastery of application state flow:
- Rendering questions and answers dynamically from structured JSON.
- Managing user progress, answer selection, and immediate validation feedback.
- Maintaining reactive scores and presenting a performance breakdown upon completion.
- Restarting and resetting application state cleanly without full-page reloads.

---

## 🛠️ Tech Stack & Concepts

- **Tech**: HTML5, CSS3 (Modern Flex/Grid layout), JavaScript (ES6+).
- **Data Source**: `questions.json` (Structured question bank).
- **Key Concepts**:
  - Application state machine (Start -> Questioning -> Feedback -> Summary)
  - DOM event delegation & dynamic element binding
  - Progress bar calculation and score accumulation
  - Data-driven rendering from external JSON schema

---

## 🚀 How to Run

Open `src/index.html` in any web browser:
```bash
open beginner/03-interactive-quiz/src/index.html
```

Or run with a local lightweight server:
```bash
python3 -m http.server --directory beginner/03-interactive-quiz/src 8080
```
