# 04 - Personal Finance & Expense Tracker

> An intermediate front-end web application that calculates budgets, tracks income and expenses, visualizes spending categories with interactive charts, and persists transactions locally.

---

## 📌 Project Overview & Objectives

Budgeting tools demonstrate advanced client-side state handling and mathematical aggregation:
- Managing relational financial records (ID, timestamp, description, category, amount, type: expense/income).
- Real-time aggregation of balances, income vs expense totals, and category breakdown.
- Visualizing data via an external library like [Chart.js](https://www.chartjs.org/) (doughnut charts for categories, bar charts for monthly trends).
- Exporting financial records to CSV and persisting across sessions using `localStorage` or `IndexedDB`.

---

## 🛠️ Planned Tech Stack & Architecture

- **UI & Layout**: HTML5, CSS Grid / Flexbox, Accessible form controls
- **Logic & Charts**: JavaScript (ES6+), Chart.js (or lightweight SVG charts)
- **Data Persistence**: `localStorage` with JSON serialization & schema migration guard
- **Key Modules**:
  ```text
  src/
  ├── state.js       # Transaction store & event dispatch
  ├── calculations.js# Totals, category grouping, balance aggregations
  ├── charts.js      # Chart.js rendering & reactive updates
  ├── storage.js     # localStorage persistence and CSV export utility
  └── ui.js          # DOM bindings, table rendering, form validation
  ```

---

## 📋 Implementation Checklist & Milestones

- [ ] **Milestone 1: State & Data Model**
  - Implement `addTransaction`, `deleteTransaction`, `getSummary`
  - Validate numeric inputs (prevent negative amounts or NaN)
- [ ] **Milestone 2: UI & Table Rendering**
  - Interactive transaction list with category icons and color-coded badges
  - Filtering by date range and category dropdown
- [ ] **Milestone 3: Data Visualization**
  - Integrate Chart.js doughnut chart for category breakdown
  - Animate updates smoothly when new transactions are added
- [ ] **Milestone 4: Persistence & Export**
  - Store and load from `localStorage`
  - One-click CSV export utility (`data:text/csv`)
