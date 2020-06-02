const to_do_form = document.querySelector(".js-toDoForm"),
  to_do_input = to_do_form.querySelector("input"),
  to_do_list = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paint_to_do(text) {
  const li = document.createElement("li");
  const del_btn = document.createElement("button");
  del_btn.innerText = "X";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(del_btn);
  to_do_list.appendChild(li);
}

function handle_submit(event) {
  event.preventDefault();
  const current_value = to_do_input.value;
  paint_to_do(current_value);
  to_do_input.value = "";
}

function load_todos() {
  const todos = localStorage.getItem(TODOS_LS);
  if (todos !== null) {
  }
}

function init() {
  load_todos();
  to_do_form.addEventListener("submit", handle_submit);
}

init();
