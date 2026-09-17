#!/usr/bin/env python3
"""
CLI Task Manager
A simple, robust command-line task manager demonstrating CRUD operations,
file persistence with JSON, and CLI argument parsing.
"""

import argparse
import json
import os
import sys
from datetime import datetime

DATA_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "tasks.json")


def load_tasks():
    """Load tasks safely from the local JSON file."""
    if not os.path.exists(DATA_FILE):
        return []
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except (json.JSONDecodeError, OSError) as e:
        print(f"[Warning] Could not read {DATA_FILE}: {e}", file=sys.stderr)
        return []


def save_tasks(tasks):
    """Save tasks atomically to the local JSON file."""
    try:
        with open(DATA_FILE, "w", encoding="utf-8") as f:
            json.dump(tasks, f, indent=2, ensure_ascii=False)
    except OSError as e:
        print(f"[Error] Failed to save tasks: {e}", file=sys.stderr)


def add_task(args):
    """Create a new task with unique ID and priority."""
    tasks = load_tasks()
    next_id = max([t["id"] for t in tasks], default=0) + 1
    new_task = {
        "id": next_id,
        "title": args.title.strip(),
        "priority": args.priority.upper(),
        "status": "pending",
        "created_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    tasks.append(new_task)
    save_tasks(tasks)
    print(f"✓ Added task #{next_id}: '{new_task['title']}' [Priority: {new_task['priority']}]")


def list_tasks(args):
    """Display tasks in a clean terminal table format."""
    tasks = load_tasks()
    if not tasks:
        print("No tasks found. Add your first task with: python3 task_manager.py add \"My Task\"")
        return

    filtered = tasks
    if args.status and args.status != "all":
        filtered = [t for t in tasks if t["status"] == args.status]

    if not filtered:
        print(f"No tasks found with status '{args.status}'.")
        return

    print("\n" + "=" * 70)
    print(f"{'ID':<4} | {'Status':<11} | {'Priority':<8} | {'Task Title':<40}")
    print("=" * 70)
    for t in filtered:
        status_label = "✓ done" if t["status"] == "completed" else "○ pending"
        print(f"{t['id']:<4} | {status_label:<11} | {t.get('priority', 'MED'):<8} | {t['title']:<40}")
    print("=" * 70 + "\n")


def complete_task(args):
    """Mark an existing task as completed."""
    tasks = load_tasks()
    for t in tasks:
        if t["id"] == args.id:
            if t["status"] == "completed":
                print(f"Task #{args.id} is already marked as completed.")
                return
            t["status"] = "completed"
            t["completed_at"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            save_tasks(tasks)
            print(f"✓ Task #{args.id} marked as completed!")
            return
    print(f"[Error] Task #{args.id} not found.", file=sys.stderr)


def delete_task(args):
    """Remove a task by ID."""
    tasks = load_tasks()
    original_len = len(tasks)
    tasks = [t for t in tasks if t["id"] != args.id]
    if len(tasks) < original_len:
        save_tasks(tasks)
        print(f"✓ Deleted task #{args.id}.")
    else:
        print(f"[Error] Task #{args.id} not found.", file=sys.stderr)


def main():
    parser = argparse.ArgumentParser(
        description="Task Manager CLI - A practical demonstration of Python CLI tooling and persistence."
    )
    subparsers = parser.add_subparsers(dest="command", help="Available subcommands")

    # Add command
    add_parser = subparsers.add_parser("add", help="Add a new task")
    add_parser.add_argument("title", type=str, help="Task description")
    add_parser.add_argument(
        "-p", "--priority", choices=["low", "med", "high"], default="med", help="Priority level (default: med)"
    )
    add_parser.set_defaults(func=add_task)

    # List command
    list_parser = subparsers.add_parser("list", help="List all tasks")
    list_parser.add_argument(
        "-s", "--status", choices=["all", "pending", "completed"], default="all", help="Filter tasks by status"
    )
    list_parser.set_defaults(func=list_tasks)

    # Complete command
    complete_parser = subparsers.add_parser("complete", help="Mark a task as completed")
    complete_parser.add_argument("id", type=int, help="Task ID to mark complete")
    complete_parser.set_defaults(func=complete_task)

    # Delete command
    del_parser = subparsers.add_parser("delete", help="Delete a task")
    del_parser.add_argument("id", type=int, help="Task ID to delete")
    del_parser.set_defaults(func=delete_task)

    args = parser.parse_args()
    if hasattr(args, "func"):
        args.func(args)
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
