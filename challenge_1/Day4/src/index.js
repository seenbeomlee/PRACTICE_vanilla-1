// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const work_frame = document.querySelector("body");
const hello = document.querySelector("h1");

function handle_resize() {
  let w = window.innerWidth;

  if (w < 600) {
    work_frame.style.backgroundColor = "#2D8ED6";
  } else if (w < 1200) {
    work_frame.style.backgroundColor = "#904FAD";
  } else {
    work_frame.style.backgroundColor = "#EEBC12";
  }
}

function change_bg() {
  if (work_frame) {
    window.addEventListener("resize", handle_resize);
  }
}

function init() {
  handle_resize();
  hello.style.color = "white";
  change_bg();
}

init();
