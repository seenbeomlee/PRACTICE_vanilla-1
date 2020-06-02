#1 restudy for vanilla javascript => make todo-list with js
/i will use the repl for restudy & and save here
#2 Do 2 week chanllenge for practice Vjs

#1.0
/socket.io => demo => Chat with someone in realtime
/three.js => we can play games with js / like 'World draw'
/impactjs.com => ''
/taotajima.jp => cool webpage with js

es5, es6
/ECMAscript5 = es5
/ECMAscript6 = es6
/it is specification of js / chrome, internet-explore .. receives this with their own method

Vanilla js => js with none library

vanilla-js.com => vanilla js standard-docs

difference between 'let' and 'let' and 'const'
/
/
/

difference between '' and "" and ``
/
/
/

DOM(Document Object Model)

#1.1

/\* it changes color of the id==title when clicked

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

\*/

/\* it can check my network condition
function handle_offline() {
console.log("you are offlined from network");
}

function handle_online() {
console.log("you are onlined from network");
}

window.addEventListener("offline", handle_offline);
window.addEventListener("online", handle_online);
\*/

#1.2

querySelector = bring the first 1 item
querySelectorAll = bring all the items with an array

make a local storage to save user-name

we need to add "<meta charset="utf-8" />" to the head of "index.html" to use some kind of emoji

#1.3 feat

i updated "clock.js"

to divide 'AM' and 'PM'

#1.4

1 JSON.stringify() => it changes all data to string format.
/Since 'localStorage' cannot store js-data, we need to change all data to 'string' format.

2 JSON.parse() => it changes all string format to object (normal form) that js can understand.

3 array.forEach(function) => it implement some functions for each element of the array.

4 array.filter(function) => filter will implement all elements in the array, and return some elements which return 'true' and make a new array with them.

5 parseInt(li.id) => it changes "string" to "int".
