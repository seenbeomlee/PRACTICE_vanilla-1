// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const to_do_form = document.querySelector(".js-to_do_form"),
  to_do_input = to_do_form.querySelector("input"),
  pending_list = document.querySelector(".js-pending_list"),
  finisihed_list = document.querySelector(".js-finisihed_list");

const PENDING_LS = "pending_array";
const FINISHED_LS = "finished_array";

let pending_array = [];
let finished_array = [];

function save_todos() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pending_array));
  localStorage.setItem(FINISHED_LS, JSON.stringify(finished_array));
}

function paint_to_do_1(text) {
  const li = document.createElement("li");
  const del_btn = document.createElement("button");
  const new_id = pending_array.length + 1;
  const span = document.createElement("span");
  del_btn.innerText = "X";
  //del_btn.addEventListener("click", delete_todo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(del_btn);
  li.id = new_id;
  pending_list.appendChild(li);
  const to_do_obj = {
    text: text,
    id: new_id,
  };
  pending_array.push(to_do_obj);
  save_todos();
}

function paint_to_do_2(text) {
  const li = document.createElement("li");
  const del_btn = document.createElement("button");
  const new_id = finished_array.length + 1;
  const span = document.createElement("span");
  del_btn.innerText = "X";
  //del_btn.addEventListener("click", delete_todo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(del_btn);
  li.id = new_id;
  finisihed_list.appendChild(li);
  const to_do_obj = {
    text: text,
    id: new_id,
  };
  finished_array.push(to_do_obj);
  save_todos();
}

function handle_submit(event) {
  event.preventDefault();
  const current_value = to_do_input.value;
  paint_to_do_1(current_value);
  to_do_input.value = "";
}

function load_todos() {
  const loaded_pending = localStorage.getItem(PENDING_LS);
  const loaded_finished = localStorage.getItem(FINISHED_LS);
  if (loaded_pending !== null) {
    const parsed_pending = JSON.parse(loaded_pending);
    parsed_pending.forEach(function (toDo) {
      paint_to_do_1(toDo.text);
    });
  }
  if (loaded_finished !== null) {
    const parsed_finished = JSON.parse(loaded_finished);
    parsed_finished.forEach(function (toDo) {
      paint_to_do_2(toDo.text);
    });
  }
}

function init() {
  load_todos();
  to_do_form.addEventListener("submit", handle_submit);
}

init();
