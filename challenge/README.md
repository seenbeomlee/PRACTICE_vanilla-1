#1 restudy for vanilla javascript => make todo-list with js
= i will use the repl for restudy & and save here
#2 Do 2 week chanllenge for practice Vjs

---

#1.0
= socket.io => demo => Chat with someone in realtime
= three.js => we can play games with js // like 'World draw'
= impactjs.com => ''
= taotajima.jp => cool webpage with js

es5, es6
= ECMAscript5 = es5
= ECMAscript6 = es6
= it is specification of js // chrome, internet-explore .. receives this with their own method

Vanilla js => js with none library

vanilla-js.com => vanilla js standard-docs

DOM(Document Object Model)

---

#1.1

it changes color of the id==title when clicked

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

---

it can check my network condition

function handle_offline() {
console.log("you are offlined from network");
}

function handle_online() {
console.log("you are onlined from network");
}

window.addEventListener("offline", handle_offline);
window.addEventListener("online", handle_online);

---

#1.2

querySelector = bring the first 1 item
querySelectorAll = bring all the items with an array

make a local storage to save user-name

we need to add "<meta charset="utf-8" />" to the head of "index.html" to use some kind of emoji

---

#1.3 feat

i updated "clock.js"

to divide 'AM' and 'PM'

#1.4

---

1 JSON.stringify() => it changes all data to string format.
= Since 'localStorage' cannot store js-data, we need to change all data to 'string' format.

2 JSON.parse() => it changes all string format to object (normal form) that js can understand.

3 array.forEach(function) => it implement some functions for each element of the array.

4 array.filter(function) => filter will implement all elements in the array, and return some elements which return 'true' and make a new array with them.

5 parseInt(li.id) => it changes "string" to "int".

---

#1.5

1 create a random number in js => using function 'Math.random()', it create random number 0 ~ 1.0000..
= -so if we wanna create 0~4 random number, then Math.floor(Math.random() \* 5);

---

#1.6

# 1 What is the benefit of loading Js at the bottom as opposed to the top of the document?

= generally, page loading starts top to bottom. So if we put Js code to the top, the total loading time is being longer
= so, if we put external js code files at the bottom of our page, we give the priority of our HTTP requests to the display visual things first that will be
presented to the client instead of to the logic of interaction or dynamics.

reference: https://stackoverflow.com/questions/5329807/benefits-of-loading-js-at-the-bottom-as-opposed-to-the-top-of-the-document

# 2 difference between "==" and "===" in js

= "==" uses implicit casting to compare. So the type of the variable doesn't matter.
= However, since "===" does not use implicit casting, so it is more strict than "==". it checks 'data' and also 'type'
= 0 == "0" // true -- it will casted to string
= 0 == [] // true -- it will casted
= "0" == [] // false -- it will casted -- false!@

# 3 difference between "var", "let", and "const"

js follows "Function-level scope" unlike other programming-languages follow "Block-level scope".
"hoisting"
-Var
= it follows "function-level scope" => it is dangerous(global variable)
= it permits duplicated variable names
= hoisting = var "Declare" and "Initialize" together

-Let
= let follows "block-level scope"
= let does not permit duplicated variable names => it will be SyntaxError
= let seperates "Declare" and "Initialize"
= it permits the "reallocation"

-Const
= it is for "constant", but it is similar to the 'let'
= it follows "block-level scope"
= it prohibits the "reallocation"
= const must! "Declare" and "Initialize" at the same time!

they are different about "hoisting"

if you use "ES6" the use of "var" KEYWORD is not recommended.

# 4 difference between '' and "" and ``

=

reference: https://poiemaweb.com/es6-block-scope

2020/06/02 22:55
