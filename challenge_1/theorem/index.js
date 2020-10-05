/* this is multi-line-comments in js */
// this is single-line-comment in js

// alert("Im working!");

/* string
const wat = "Meme"
*/

/* boolean
const wat = true;
const tat = false;
*/

/*
const wat = 55;
*/

/* float
const wa = 55.1;
*/

/* array
const something = "Something"

const days_of_week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 54, true, "stuff", "lalala", something];
}

console.log(days_of_week);
*/

/* object
const myInfo = {
    name: "LSB",
    age: "22",
    gender: "Male",
    isHandsome: true,
    fav_games: ["watchdogs", "control", "LOL"];
    fav_food: {
        name: "kimchi",
        is_hot: true
    }
}

console.log(myInfo.name);
console.log(myInfo)

// console is also an object!! and there is 'log'
console.log(console);
*/

/* function
function say_hello(name, num){
    console.log('Hello!', name, " you have: ", num);
}

sayHello("seenbeom lee", 22);

=> console.log(`Hello ${name} you are ${age} years old`)

///

function say_hello(name, num){
    return 'Hello!', name, " you have: ", num;
}

const greet_name = sayHello("seenbeom lee, 22")

console.log(greet_name)

///
const calculator = {
    plus: function(a, b) {
        return a + b;
    }
}

const plus = calculator.plus(5, 5)
console.log(plus)
*/

//const title = document.getElementById("title");

//const title = document.querySelector("#title");

/*
console.log(title);

title.innerHTML = "Hi! from js"; // it changes the content of id==title
title.style.color = "red"; // it changes the color of "Hi! from js"
document.title = "this is tab title";
console.dir(title);
*/

/* when resized, it print "resize" on the console
function handle_resize() {
  console.log("I have been resized");
}

window.addEventListener("resize", handle_resize);
*/

/* this means call function right now
window.addEventListener("resize", handle_resize)
*/

/* condition stuff 
const age = prompt("How old are you");

if (age >= 18 && age <= 21) {
  console.log("you can drink but you should not");
} else if (age > 21) {
  console.log("go ahead");
} else {
  console.log("too young");
}
*/

/* it changes color of the id==title when clicked my mouse pointer
const title = document.querySelector("#title");

const BASE_COLOR = "red";
const OTHER_COLOR = "#7f8c8d";

function handle_click() {
  const current_color = title.style.color;
  if (current_color == BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handle_click);
}
init();
*/

/* it can check my network condition
function handle_offline() {
  console.log("you are offlined from network");
}

function handle_online() {
  console.log("you are onlined from network");
}

window.addEventListener("offline", handle_offline);
window.addEventListener("online", handle_online);
*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handle_click() {
  /*
  const has_class = title.classList.contains(CLICKED_CLASS);
  if (!has_class) {
    title.classList.add(CLICKED_CLASS); // set value
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
  this is same as below */
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handle_click);
}
init();
