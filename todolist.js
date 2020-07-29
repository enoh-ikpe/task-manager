var addTodoBtn = document.querySelector(".btn-primary");
var addTodoInput = document.querySelector(".addtoInput");
var todoDisplay = document.querySelector("tbody");

function getAllTodos() {
  // Gets todo from local storage;
  var allTodos = localStorage.getItem("allTodos");

  if (allTodos) {
    return JSON.parse(allTodos);
  } else {
    localStorage.setItem("allTodos", JSON.stringify([]));
    return getAllTodos();
  }
}

function updateTodo(todos) {
  localStorage.setItem("allTodos", JSON.stringify(todos));
}

function getLastTodoId() {
  var allTodos = getAllTodos();
  var lastTodo = allTodos[allTodos.length - 1];
  if (lastTodo) {
    return lastTodo.id;
  } else {
    return 0;
  }
}

function addTodo(newTodo) {
  var allTodos = getAllTodos();
  allTodos.push(newTodo);
  updateTodo(allTodos);
}

function displayTodos() {
  var todos = getAllTodos();
  // Displaying todos.
  var allTodosHtml = "";
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
    if (todo.isComplete) {
      // var todoHtml = `
      //   <li data-todo-id="${todo.id}">
      //     <input type="checkbox" name="" id="" checked>
      //     <span class="strike">${todo.value}</span>
      //     <button type="button" class="btn btn-danger">Delete</button> <br>
      //   </li>
      // `;
      var todoHtml = `<tr> <td data-todo-id="${todo.id}">
       <input type="checkbox" name="" id="" checked>
       <span class="strike">${todo.value}</span>
        <button class="btn btn-danger btn-small">delete</button>
      </td> </tr>`;
      allTodosHtml += todoHtml;
    } else {
      // var todoHtml = `
      //   <li data-todo-id="${todo.id}">
      //     <input type="checkbox" name="" id="">
      //     <span>${todo.value}</span>
      //     <button class= "delete">delete</button>
      //   </li>
      // `;
      var todoHtml = ` <td data-todo-id="${todo.id}">
       <input type="checkbox" name="" id="" >
       <span>${todo.value}</span>
        <button class="btn btn-danger">delete</button>
      </td> `;
      allTodosHtml += todoHtml;
    }
  }

  todoDisplay.innerHTML = allTodosHtml;
}

function getTodoFromNode(node) {
  var todoId = Number(node.parentElement.getAttribute("data-todo-id"));

  var selectedTodo = getAllTodos().find(function (todo) {
    return todo.id === todoId;
  });

  return selectedTodo;
}

function deleteTodo(todo) {
  var allTodos = getAllTodos();
  // var todoIndex = allTodos.indexOf(todo);
  var todoIndex = allTodos.findIndex((td) => td.id === todo.id);
  allTodos.splice(todoIndex, 1);

  updateTodo(allTodos);
}

// Add a Todo
addTodoBtn.addEventListener("click", function (event) {
  var todo = {
    id: getLastTodoId() + 1,
    value: addTodoInput.value,
    isComplete: false,
  };

  addTodo(todo);
  displayTodos();
  addTodoInput.value = "";
});

// Update/delete
todoDisplay.addEventListener("click", function () {
  if (event.target.nodeName === "INPUT") {
    // Set todo as complete.
    var todo = getTodoFromNode(event.target);
    todo.isComplete = event.target.checked;

    var allTodos = getAllTodos();
    var todoIndex = allTodos.findIndex((td)=> td.id === todo.id);
    // var todoIndex = allTodos.indexOf(todo);
    allTodos.splice(todoIndex, 1, todo);
    updateTodo(allTodos);
    displayTodos();
  }
  if (event.target.nodeName === "BUTTON") {
    var createPrompt = prompt("Do you want to delete this task?","yes");
     switch(createPrompt) {
    case "yes":
     
    var todo = getTodoFromNode(event.target);
    deleteTodo(todo);
     }
    displayTodos();
  }

});
displayTodos();
