import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const clock_title = document.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020/12/24 00:00:00+0900");
  const current_date = new Date();
  print_time(xmasDay, current_date);
}

function print_time(xmasDay, current_date) {
  /*
  const days = xmasDay.getDay() - current_date.getDay();
  const hours = xmasDay.getHours() - current_date.getHours();
  const minutes = xmasDay.getMinutes() - current_date.getMinutes();
  const seconds = xmasDay.getSeconds() - current_date.getSeconds();
*/
  const newDay = new Date(xmasDay - current_date);
  newDay.setMonth(newDay.getMonth());

  clock_title.innerText = `${Math.floor(
    newDay.getTime() / 1000 / 60 / 60 / 24
  )}d ${
    newDay.getHours() < 10 ? `0${newDay.getHours()}` : newDay.getHours()
  }h ${
    newDay.getMinutes() < 10 ? `0${newDay.getMinutes()}` : newDay.getMinutes()
  }m ${
    newDay.getSeconds() < 10 ? `0${newDay.getSeconds()}` : newDay.getSeconds()
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
