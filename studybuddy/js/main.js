import { getTasks, addTask, toggleTask, deleteTask, sortByDate } from "./tasks.js";
import { renderTasks } from "./ui.js";

let currentFilter = "all";

const form = document.querySelector(".task-form");
const taskListEl = document.querySelector(".task-list");
const filterButtons = document.querySelectorAll(".filter-btn");

// Filter tasks based on what option was selected
function getFilteredTasks(tasks) {
  if (currentFilter === "completed") {
    return tasks.filter((task) => task.completed);
  }

  if (currentFilter === "upcoming") {
    return tasks.filter((task) => !task.completed);
  }

  return tasks;
}

// Update which filter button is active
function updateActiveFilterButton() {
  filterButtons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.filter === currentFilter) {
      btn.classList.add("active");
    }
  });
}

// Refresh task list on screen
function refresh() {
  sortByDate();

  const tasks = getTasks();
  const filteredTasks = getFilteredTasks(tasks);

  renderTasks(taskListEl, filteredTasks);
  updateActiveFilterButton();
}

// Add new task
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.taskName.value.trim();
  const subject = form.subject.value.trim();
  const dueDate = form.dueDate.value;
  const notes = form.notes.value.trim();

  // Conditionals
  if (!name || !subject || !dueDate) {
    alert("Please fill out all required fields.");
    return;
  }

  // Task object
  const newTask = {
    id: Date.now().toString(),
    name,
    subject,
    dueDate,
    notes,
    completed: false,
  };

  addTask(newTask);
  form.reset();
  refresh();
});

// Filter buttons
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    refresh();
  });
});

taskListEl.addEventListener("click", (e) => {
  const taskItem = e.target.closest(".task-item");
  if (!taskItem) return;

  const id = taskItem.dataset.id;

  if (e.target.classList.contains("toggle-btn")) {
    toggleTask(id);
    refresh();
  }

  if (e.target.classList.contains("delete-btn")) {
    deleteTask(id);
    refresh();
  }
});

refresh();
