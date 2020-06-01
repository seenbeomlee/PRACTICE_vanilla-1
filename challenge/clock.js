const clock_container = document.querySelector(".js-clock"),
  clock_title = clock_container.querySelector("h1");

function get_time() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clock_title.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
} // ?: is ternary operator

function init() {
  get_time();
  setInterval(get_time, 1000); // get time with time-interval 1000ms
}

init();
