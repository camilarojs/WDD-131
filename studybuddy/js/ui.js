// This file only shows tasks on the page
function isOverdue(task) {
  if (task.completed) return false;

  const today = new Date().toISOString().slice(0, 10);
  return task.dueDate < today;
}

export function renderTasks(taskListEl, tasks) {
  if (tasks.length === 0) {
    taskListEl.innerHTML = `<p class="muted">No tasks found.</p>`;
    return;
  }

  const html = tasks.map((task) => {
    const overdueLabel = isOverdue(task) ? " (Overdue)" : "";
    const statusText = task.completed ? "Completed" : "Incomplete";

    return `
      <div class="task-item" data-id="${task.id}">
        <div>
          <strong>${task.name}</strong> — ${task.subject}<br>
          <small>Due: ${task.dueDate}${overdueLabel}</small><br>
          ${task.notes ? `<small>${task.notes}</small>` : ""}
        </div>

        <div class="task-actions">
          <button class="toggle-btn" type="button">${statusText}</button>
          <button class="delete-btn" type="button">Delete</button>
        </div>
      </div>
    `;
  }).join("");

  taskListEl.innerHTML = html;
}
