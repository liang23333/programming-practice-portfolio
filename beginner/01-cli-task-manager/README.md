# 01 - CLI Task Manager

> A lightweight, persistent command-line task manager demonstrating CRUD operations, JSON file serialization, input validation, and clean CLI argument handling.

---

## 📌 Project Overview

Command-line interfaces are foundational to software engineering. This project demonstrates core computer science and programming concepts without relying on external dependencies:
- Structured data manipulation (records with ID, status, priority, timestamps)
- File persistence using JSON serialization
- Command-line argument parsing and subcommands via Python's standard `argparse`
- Safe file I/O and graceful error handling

---

## 🛠️ Tech Stack & Concepts

- **Language**: Python 3.8+ (Zero external dependencies)
- **Standard Libraries**: `argparse`, `json`, `os`, `sys`, `datetime`
- **Key Concepts**:
  - CRUD operations (Create, Read, Update, Delete)
  - Subcommand parsing architecture
  - File persistence & atomic writes
  - Terminal tabular output formatting

---

## 🚀 Usage Guide

### 1. View Help
```bash
python3 src/task_manager.py --help
```

### 2. Add Tasks
```bash
# Add with default medium priority
python3 src/task_manager.py add "Write unit tests for authentication module"

# Add with custom priority (low, med, high)
python3 src/task_manager.py add "Deploy portfolio repository to GitHub" -p high
python3 src/task_manager.py add "Research Docker containerization" -p low
```

### 3. List Tasks
```bash
# List all tasks
python3 src/task_manager.py list

# Filter by status (pending or completed)
python3 src/task_manager.py list -s pending
python3 src/task_manager.py list -s completed
```

Sample output:
```text
=================================================================
ID   | Status     | Priority | Task                               
=================================================================
1    | ○ pending  | HIGH     | Deploy portfolio repository to GitHub
2    | ○ pending  | MED      | Write unit tests for auth module 
=================================================================
```

### 4. Mark Task Completed
```bash
python3 src/task_manager.py complete 1
```

### 5. Delete a Task
```bash
python3 src/task_manager.py delete 2
```

---

## 📂 File Structure

```text
01-cli-task-manager/
├── README.md
└── src/
    ├── task_manager.py      # Main CLI application
    └── tasks.json           # Created automatically upon adding first task
```

---

## 💡 Key Learnings

1. **Subcommand Architecture**: Using `argparse.add_subparsers()` enables scalable CLI interfaces identical to tools like `git` or `docker`.
2. **Defensive File Handling**: Handled cases where `tasks.json` does not exist or contains invalid JSON by initializing fallback structures.
3. **Data Integrity**: Enforced sequential ID assignment and validated task existence before executing mutations.
