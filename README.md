# 💻 Programming Practice Portfolio

> A curated collection of beginner-to-intermediate programming projects designed to demonstrate core computer science fundamentals, practical software engineering skills, API integrations, and clean code architecture.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Projects](https://img.shields.io/badge/Projects-6%20Curated-blue.svg)](#-project-index)
[![Status](https://img.shields.io/badge/Status-Active%20Learning-success.svg)](#)

---

## 🎯 Purpose & Goals

This portfolio is structured to showcase deliberate, progressive learning across key software engineering competencies:
- **Foundational Logic & Algorithms**: Control flow, data parsing, CLI interaction, and file persistence.
- **Modern Web APIs & Asynchronous Programming**: Fetching third-party REST APIs, handling promises/async-await, and graceful error recovery.
- **State Management & UI Dynamics**: Event-driven UI updates, DOM manipulation, and interactive user experiences.
- **Data Persistence & CRUD Systems**: LocalStorage, JSON file storage, and database-backed microservices.
- **Software Engineering Discipline**: Consistent project structure, clean documentation, unit testing, and modular code organization.

---

## 📂 Repository Structure

The repository follows a clean, modular mono-repository architecture separated into distinct difficulty tiers:

```text
programming-practice-portfolio/
├── .gitignore
├── LICENSE
├── README.md                          <-- Portfolio overview and master directory
├── PROJECT_TEMPLATE.md                <-- Standard documentation template for new projects
├── beginner/                          <-- Tier 1: Core fundamentals, simple I/O, DOM & APIs
│   ├── 01-cli-task-manager/
│   │   ├── README.md
│   │   └── src/task_manager.py
│   ├── 02-weather-dashboard/
│   │   ├── README.md
│   │   └── src/
│   │       ├── index.html
│   │       ├── style.css
│   │       └── app.js
│   └── 03-interactive-quiz/
│       ├── README.md
│       └── src/
│           ├── index.html
│           ├── quiz.js
│           └── questions.json
└── intermediate/                      <-- Tier 2: Persistent CRUD, data visualization, full-stack APIs
    ├── 04-personal-finance-tracker/
    │   ├── README.md
    │   └── src/
    ├── 05-restful-api-service/
    │   ├── README.md
    │   └── src/
    └── 06-kanban-task-board/
        ├── README.md
        └── src/
```

---

## 🚀 Project Index

| # | Project Name | Tier | Tech Stack | Core Concepts Demonstrated | Status | Directory |
|---|--------------|------|------------|----------------------------|:------:|:---------:|
| 01 | **CLI Task Manager** | Beginner | Python | Argument parsing (`argparse`), JSON file persistence, CRUD logic, terminal formatting | `Ready` | [Explore](./beginner/01-cli-task-manager/) |
| 02 | **Weather Dashboard** | Beginner | HTML5, CSS3, JavaScript | REST API consumption, `async/await`, dynamic DOM updates, mock fallback | `Ready` | [Explore](./beginner/02-weather-dashboard/) |
| 03 | **Interactive Quiz App** | Beginner | Vanilla JS, HTML/CSS | State management, JSON data ingestion, score calculation, timer logic | `Ready` | [Explore](./beginner/03-interactive-quiz/) |
| 04 | **Personal Finance & Expense Tracker** | Intermediate | JS / Chart.js / LocalStorage | Data aggregation, charting/visualization, CSV export, multi-category budgets | `Roadmap` | [Explore](./intermediate/04-personal-finance-tracker/) |
| 05 | **RESTful Task & User API** | Intermediate | Python (FastAPI/SQLite) or Node.js | REST standards, ORM models, JWT authentication, OpenAPI/Swagger documentation | `Roadmap` | [Explore](./intermediate/05-restful-api-service/) |
| 06 | **Drag-and-Drop Kanban Board** | Intermediate | HTML5 Drag & Drop API, JS | Complex state synchronization, custom modal dialogs, column reordering | `Roadmap` | [Explore](./intermediate/06-kanban-task-board/) |

---

## 🛠️ Project Standards & Convention

Every project in this repository follows a consistent engineering standard:
1. **Self-Contained Directory**: Each project has its own dedicated directory with all source code and assets.
2. **Dedicated Documentation (`README.md`)**: Based on [PROJECT_TEMPLATE.md](./PROJECT_TEMPLATE.md), documenting:
   - Problem statement and user stories
   - Architecture & design choices
   - Step-by-step setup and run instructions
   - Key engineering challenges and what was learned
3. **No External Black Boxes**: Beginner projects prioritize vanilla implementations to master foundational mechanics before reaching for heavy frameworks.
4. **Resilience & Error Handling**: Graceful degradation when network calls fail or user input is invalid.

---

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/liang23333/programming-practice-portfolio.git
cd programming-practice-portfolio
```

### 2. Run Individual Projects

#### Project 01: CLI Task Manager (Python)
```bash
# View available commands
python3 beginner/01-cli-task-manager/src/task_manager.py -h

# Add a task
python3 beginner/01-cli-task-manager/src/task_manager.py add "Complete portfolio setup" -p high

# List tasks
python3 beginner/01-cli-task-manager/src/task_manager.py list
```

#### Project 02: Weather Dashboard (Web)
```bash
# Open directly in your browser
open beginner/02-weather-dashboard/src/index.html
# Or serve using any static server
python3 -m http.server --directory beginner/02-weather-dashboard/src 8080
```

#### Project 03: Interactive Quiz (Web)
```bash
# Open in browser
open beginner/03-interactive-quiz/src/index.html
```

---

## 📈 Learning Roadmap

```
[Phase 1: Foundations]
   ├── CLI Tooling & File I/O (Task Manager)
   ├── Web APIs & Asynchronous Flow (Weather Dashboard)
   └── Interactive State & Event Handling (Quiz App)
          │
          ▼
[Phase 2: Data Persistence & Architecture]
   ├── Analytical UI & Data Aggregation (Finance Tracker)
   ├── Backend Services, Auth & REST Standards (FastAPI Microservice)
   └── Advanced Browser APIs & Complex State (Kanban Board)
          │
          ▼
[Phase 3: Production Polish]
   ├── Full-Stack Integration
   ├── Automated CI/CD (GitHub Actions)
   └── Containerization (Docker)
```

---

## 📄 License

This repository is licensed under the [MIT License](./LICENSE). Feel free to reference, fork, or use any template code for your own learning journey.
