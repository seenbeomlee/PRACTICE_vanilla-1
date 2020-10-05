const body = document.querySelector("body");

const IMG_NUMBER = 15;

/*
handle_img_load(){
    console.log("finished loading");
}
*/

function paint_image(num) {
  const image = new Image();
  image.src = `images/${num}.jpg`;
  image.classList.add("bg_image");
  body.prepend(image);
  //image.addEventListener("loadend", handle_img_load);
}

function gen_random() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const random_number = gen_random();
  paint_image(random_number);
}

init();
