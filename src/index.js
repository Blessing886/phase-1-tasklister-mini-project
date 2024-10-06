const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".submit");
const todoList = document.querySelector(".todo-list");
//event listener
todoButton.addEventListener("click", addTodo);
//function
function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //input value
    todoInput.value = ""
    // complete button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append list
    todoList.appendChild(todoDiv);
}
//event listener
todoList.addEventListener("click", deleteCheck);
//function
function deleteCheck(event) {
    const item = event.target;
//delete
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }
    //done
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("done");
    }
}