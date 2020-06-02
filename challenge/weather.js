const weather = document.querySelector(".js-weather");

const API_KEY = "7bbd8a06eefb99a620a55ffa9317c9a9"; /* get weather API */
const COORDS = "coords";

function get_weather(latitude, longitude) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric` /* get weather API */
  )
    .then(function (response) {
      /* then will wait for fetch and then implemented*/
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp; /* my location temp */
      const place = json.name; /* my location name */
      weather.innerText = `${temperature}:${place}`; /* write them on the page */
    });
}

function save_coords(coords_obj) {
  localStorage.setItem(COORDS, JSON.stringify(coords_obj));
}

function handle_geo_success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coords_obj = {
    latitude: latitude /* it can be just latitude, longitude */,
    longitude: longitude,
  };
  save_coords(coords_obj);
  get_weather(latitude, longitude);
}

function handle_geo_error() {
  console.log("cannot access geo location");
}

function ask_for_coords() {
  navigator.geolocation.getCurrentPosition(
    handle_geo_success,
    handle_geo_error
  );
}

function load_coords() {
  const loaded_coords = localStorage.getItem(COORDS);
  if (loaded_coords == null) {
    ask_for_coords();
  } else {
    // getWeather
    const parse_coords = JSON.parse(loaded_coords);
    //console.log(parse_coords);
    get_weather(parse_coords.latitude, parse_coords.longitude);
  }
}

function init() {
  load_coords();
}

init();
