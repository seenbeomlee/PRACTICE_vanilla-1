const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "current_user";
SHOWING_CN = "showing";

function save_name(text) {
  // save user-data
  localStorage.setItem(USER_LS, text);
}

function handle_submit(event) {
  event.preventDefault(); // prevent the default event!
  const current_value = input.value;
  paint_greeting(current_value);
  save_name(current_value);
}

function ask_for_name() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handle_submit);
}

function paint_greeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function load_name() {
  const current_user = localStorage.getItem(USER_LS);
  if (current_user == null) {
    // no user
    ask_for_name();
  } else {
    // yes user
    paint_greeting(current_user);
  }
}

function init() {
  load_name();
}

init();
