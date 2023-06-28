const toDoForm  = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

const toDoInput = toDoForm.querySelector("input");

function handleToDoSubmit(event){
    event.preventDefalut();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
}

toDoForm.addEventListener("submit",handleToDoSubmit);