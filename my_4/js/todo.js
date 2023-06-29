const toDoForm  = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY="todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
   const li = event.target.parentElement;
   li.remove();
}

function paintToDo(newOne){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newOne;
    const button = document.createElement("button");
    button.innerText ="❌";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos){
    const parseToDos = JSON.parse(savedToDos);
    toDos=parseToDos;
    //parseToDos.forEach((item) => paintToDo(item)); // arrow function
    parseToDos.forEach(paintToDo);
}