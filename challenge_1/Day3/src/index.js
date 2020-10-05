// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const sentence = document.querySelector("h2");

const superEventHandler = {
  Enter: function mouse_enter() {
    sentence.innerText = "The mouse is here!";
    sentence.style.color = colors[0];
  },
  Leave: function mouse_leave() {
    sentence.innerText = "The mouse is gone!";
    sentence.style.color = colors[1];
  },
  Resize: function handle_resize() {
    sentence.innerText = "You just resized!";
    sentence.style.color = colors[2];
  },
  RightClick: function handle_CM() {
    sentence.innerText = "That was a right click!";
    sentence.style.color = colors[3];
  },
};

if (sentence) {
  sentence.addEventListener("mouseenter", superEventHandler.Enter);
  sentence.addEventListener("mouseleave", superEventHandler.Leave);
  window.addEventListener("resize", superEventHandler.Resize);
  window.addEventListener("contextmenu", superEventHandler.RightClick);
}
