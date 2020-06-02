const to_do_form = document.querySelector(".js-toDoForm"),
  to_do_input = to_do_form.querySelector("input"),
  to_do_list = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = []; // const is unchangable so we need to change "const" to "let"

function delete_todo(event) {
  //console.log(event.target.parentNode);
  const btn = event.target;
  const li = btn.parentNode;
  to_do_list.removeChild(li);
  const clean_todos = toDos.filter(function (toDo) {
    //return toDo.id != li.id; // it doesn't work because li.id is "string" & toDo.id is "number"
    return toDo.id != parseInt(li.id);
  });
  toDos = clean_todos;
  save_todos();
}

function save_todos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paint_to_do(text) {
  const li = document.createElement("li");
  const del_btn = document.createElement("button");
  const new_id = toDos.length + 1;
  const span = document.createElement("span");
  del_btn.innerText = "X";
  del_btn.addEventListener("click", delete_todo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(del_btn);
  li.id = new_id;
  to_do_list.appendChild(li);
  const to_do_obj = {
    text: text,
    id: new_id,
  };
  toDos.push(to_do_obj);
  save_todos();
}

function handle_submit(event) {
  event.preventDefault();
  const current_value = to_do_input.value;
  paint_to_do(current_value);
  to_do_input.value = "";
}

function load_todos() {
  const loaded_todos = localStorage.getItem(TODOS_LS);
  if (loaded_todos !== null) {
    const parsed_todos = JSON.parse(loaded_todos);
    parsed_todos.forEach(function (toDo) {
      //console.log(toDo.text);
      paint_to_do(toDo.text);
    });
  }
}

function init() {
  load_todos();
  to_do_form.addEventListener("submit", handle_submit);
}

init();
