// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const to_do_form = document.querySelector(".js-to_do_form"),
  to_do_input = to_do_form.querySelector("input"),
  pending_list = document.querySelector(".js-pending_list"),
  finished_list = document.querySelector(".js-finisihed_list");

const PENDING_LS = "pending_array";
const FINISHED_LS = "finished_array";

let pending_array = [];
let finished_array = [];

function delete_pending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pending_list.removeChild(li);
  const clean_todos = pending_array.filter(function (toDo) {
    return toDo.id != parseInt(li.id);
  });
  pending_array = clean_todos;
  save_todos();
}

function delete_finished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finished_list.removeChild(li);
  const clean_todos = finished_array.filter(function (toDo) {
    return toDo.id != parseInt(li.id);
  });
  finished_array = clean_todos;
  save_todos();
}

function replace_pending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const current_value = btn.parentNode.childNodes[0].innerText;
  //const string = JSON.stringify(btn.id.span);
  //console.log(string);
  //const current_value = pending_array[btn_id].text;
  paint_to_do_2(current_value);
  delete_pending(event);
}

function replace_finished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const current_value = btn.parentNode.childNodes[0].innerText;
  //console.log(btn.text);
  paint_to_do_1(current_value);
  delete_finished(event);
}

function save_todos() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pending_array));
  localStorage.setItem(FINISHED_LS, JSON.stringify(finished_array));
}

function paint_to_do_1(text) {
  const li = document.createElement("li");
  const del_btn = document.createElement("button");
  const replace_btn = document.createElement("button");
  const new_id = pending_array.length + 1;
  const span = document.createElement("span");
  del_btn.innerText = "⚔";
  del_btn.addEventListener("click", delete_pending);
  replace_btn.innerText = "🎈";
  replace_btn.addEventListener("click", replace_pending);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(del_btn);
  li.appendChild(replace_btn);
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
  const replace_btn = document.createElement("button");
  const new_id = finished_array.length + 1;
  const span = document.createElement("span");
  del_btn.innerText = "⚔";
  del_btn.addEventListener("click", delete_finished);
  replace_btn.innerText = "🎈";
  replace_btn.addEventListener("click", replace_finished);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(del_btn);
  li.appendChild(replace_btn);
  li.id = new_id;
  finished_list.appendChild(li);
  const to_do_obj = {
    text: text,
    id: new_id,
  };
  finished_array.push(to_do_obj);
  save_todos();
}

function handle_submit(event) {
  //event.preventDefault();
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
