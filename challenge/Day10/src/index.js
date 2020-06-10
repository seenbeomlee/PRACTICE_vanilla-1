// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.querySelector(".js-form");

const top_container = document.querySelector(".js-top");
const range = document.getElementById("jsRange");
const form_input = form.querySelector("input");
const btn = document.querySelector(".jsPlay");

let standard = 10;

/*************** for btn **************/
function gen_random() {
  const number = Math.floor(Math.random() * standard);
  return number;
}

function start_game() {
  const random_number = gen_random();
  console.log(random_number);
  let input_value = JSON.parse(form_input.value);
  console.log(input_value);
  if (input_value !== "") {
    const res = document.querySelector(".js-res");

    let user_input = `You chose: ${input_value}, the machine chose ${random_number}`;
    let result = input_value === random_number ? `You win!` : `You lost!`;

    res.childNodes[1].innerText = user_input;
    res.childNodes[3].innerText = result;
  }
}
/*************** for btn **************/

/*************** for range **************/
if (range) {
  range.addEventListener("input", handle_range_cheange);
}

function handle_range_cheange(event) {
  standard = event.target.value;
  top_container.innerText = standard;
  //console.log(number);
}
/*************** for range **************/

function init() {
  btn.addEventListener("click", start_game);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    //input_value = event.value;
  });
  //btn.innerText = "Play!";
}

init();
