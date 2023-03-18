const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoWrap = document.querySelector("#todo-wrap");

const TODOS_KEY = "TODOS";

let toDos = [];

function saveTodos() {
  //   localStorage.setItem("TODO", toDos);
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  li.remove();
  saveTodos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.classList.add("font-bold");
  li.appendChild(span);
  li.appendChild(btn);
  toDoWrap.appendChild(li);
  btn.addEventListener("click", deleteTodo);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveTodos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello() {
  console.log(123);
}

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
