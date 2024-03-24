// project-task.js

// Global variables
const taskForm = document.getElementById('addTaskForm');
const taskList = document.getElementById('tasks');
let tasks = [];

// Function to render tasks
const renderTasks = () => {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = `${task.title} - ${task.dueDate} (${task.priority})`;
    taskList.appendChild(li);
  });
};

// Event listener for form submission
taskForm.addEventListener('submit', event => {
  event.preventDefault();
  const title = event.target.title.value;
  const description = event.target.description.value;
  const dueDate = event.target.dueDate.value;
  const priority = event.target.priority.value;
  const newTask = { title, description, dueDate, priority };
  tasks.push(newTask);
  renderTasks();
  taskForm.reset();
});

// Initial rendering of tasks
renderTasks();