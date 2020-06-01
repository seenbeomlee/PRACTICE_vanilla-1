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
