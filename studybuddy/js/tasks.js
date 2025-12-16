// This file shows tasks on the page
let tasks = []; // Array that stores all task objects

export function getTasks() {
  return tasks;
}

// Add a new task to the array
export function addTask(task) {
  tasks.push(task);
}

// Toggle completed / incomplete
export function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      task.completed = !task.completed;
    }
    return task;
  });
}

// Remove a task from the array
export function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
}

// Sort tasks by due date
export function sortByDate() {
  tasks.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
}
