document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("new-task");
    const addTaskBtn = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");
    const filterBtns = document.querySelectorAll(".filter-btn");
  
    let tasks = [];
    let filter = "any";
  
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText) {
        const task = {
          id: Date.now(),
          text: taskText,
          completed: false,
        };
  
        tasks.push(task);
        taskInput.value = "";
        renderTasks();
      } else {
        window.alert("Please enter a valid task");
      }
    });
  
    todoList.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        if (confirm("Are you sure you want to delete this task?")) {
          const taskId = parseInt(e.target.parentElement.dataset.id, 10);
          tasks = tasks.filter((task) => task.id !== taskId);
          renderTasks();
        }
      } else if (e.target.tagName === "LI") {
        const taskId = parseInt(e.target.dataset.id, 10);
        const foundTask = tasks.find((task) => task.id === taskId);
        foundTask.completed = !foundTask.completed;
        renderTasks();
      }
    });
  
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        //remove active class from all filter class
        filterBtns.forEach((btn) => btn.classList.remove("active"));
        //add active class current filter
        btn.classList.add("active");
        filter = btn.dataset.filter;
        renderTasks();
      });
    });
  
    function renderTasks() {
      todoList.innerHTML = "";
      const filteredTasks = tasks.filter((task) => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
      });
  
      filteredTasks.forEach((task) => {
        const taskItem = document.createElement("li");
        taskItem.className = `todo-item ${task.completed ? "completed" : ""}`;
        taskItem.dataset.id = task.id;
        taskItem.textContent = task.text;
  
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        taskItem.appendChild(deleteBtn);
        todoList.appendChild(taskItem);
      });
    }
  });