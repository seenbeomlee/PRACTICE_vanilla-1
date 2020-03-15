// const monday = "Mon";
// const tue = "Tue";
// const wed = "Wed";
// const thu = "Thy";
// const fri = "Fri";

// console.log(monday, tue, wed, thu, fri);

// const days_of_week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// console.log(days_of_week[2]);
// //
// const nico_info = {
//   name :"Nicolas",
//   age : 33,
//   gender : "male",
//   is_handsome : true,
//   fav_moives: ["Along the gods", "LOTR", "QQ coin"],

//   fav_food: [{name: "kimchi", fatty:false}, {name: "cheese burger", fatty: true}]}

//   console.log(nico_info.fav_food[0]);

//   nico_info.gender = "female"

//   console.log(nico_info.gender);
// //
// function sayHello(name, age) {
//   // console.log(`Hello ${name} you are ${age} years old` );
//   return `Hello ${name} you are ${age} years old`;
// }

// const greetNicolas = sayHello("Nicolas", 14)

// console.log(greetNicolas)
// //
// const calculator = {
// plus: function(a, b){
//   return a + b;
// },
// divide: function(a, b){
//   return a / b;
// },
// minus: function(a, b){
//   return a -b;
// },
// mult: function(a, b){
//   return a * b;
// },
// pow: function(a, b){
//   return a ** b;
// }
// }

// var plus = calculator.plus(5, 5)

// var minus = calculator.minus(5, 5)

// var mult = calculator.mult(5, 5)

// var divide = calculator.divide(5, 5)

// var pow = calculator.pow(3, 3)

// console.log(`plus: ${plus}, minus: ${minus}, mult: ${mult}, divide: ${divide}, pow: ${pow}`)
// //

// const title = document.querySelector("#title");

// title.innerHTML = "Hi! From JS";
// title.style.color = "red";
// document.title = "I own you now";
// //

// function handleClick() {
//   title.style.color = "blue";
// }

// title.addEventListener("click", handleClick);
// //
// if ("nicolas" == "nicolas") {
//   console.log("hi");
// } else if ("10" === "10") {
//   console.log("ho");
// } else {
//   console.log("lalala");
// }
// //
// const age = prompt("How old are U");
// console.log(age);
// //
// const age = prompt("How old are U");

// if (age >= 18 && age <= 21) {
//   console.log("you can drink but you should not");
// } else if (age > 21) {
//   console.log("go ahead");
// } else {
//   console.log("you cant");
// }
// //
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#e74c3c";

function handleClick() {
  const currentColor = title.style.color;
  console.log(currentColor);
  if (currentColor == BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();

function handleOffline() {
  console.log("Bye Bye");
}

function handleOnline() {
  console.log("Welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
