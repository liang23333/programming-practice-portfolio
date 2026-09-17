# 06 - Drag-and-Drop Kanban Task Board

> An intermediate interactive web application implementing column-based workflow management with the HTML5 Drag and Drop API, custom modal editing, and persistent board state.

---

## 📌 Project Overview & Objectives

Kanban boards (like Trello or Jira) are standard tools in software development. Implementing one showcases:
- Handling the browser's native **HTML5 Drag and Drop API** (`dragstart`, `dragover`, `drop`, `dragend`).
- Complex hierarchical state management (Board -> Columns -> Cards).
- Reordering cards within a column and transferring cards between columns.
- State persistence and modal dialogs for card editing and label assignment.

---

## 🛠️ Planned Tech Stack & Architecture

- **Frontend**: Semantic HTML5, CSS Grid / Flexbox with modern smooth transitions.
- **JavaScript**: ES6+ modules with an immutable state store pattern.
- **Persistence**: `localStorage` with JSON state synchronization.
- **Key Modules**:
  ```text
  src/
  ├── store.js      # Central state store (columns, cards, reordering logic)
  ├── dnd.js        # Drag and drop event handlers and ghost element styling
  ├── modals.js     # Task creation and detail editing dialogs
  └── app.js        # Entry point and event delegation
  ```

---

## 📋 Implementation Checklist & Milestones

- [ ] **Milestone 1: Board Layout & Static Rendering**
  - 4 Standard columns: `Backlog`, `In Progress`, `Review`, `Done`
  - Card components with title, tags, and timestamps
- [ ] **Milestone 2: Drag and Drop Mechanics**
  - Enable dragging on card elements (`draggable="true"`)
  - Calculate insertion drop targets based on mouse position
- [ ] **Milestone 3: Card Management & Modals**
  - Add card modal with category selection and due date
  - Quick inline edit and delete actions
- [ ] **Milestone 4: State Serialization**
  - Automatically synchronize board modifications to `localStorage`
  - Export/Import board JSON data
