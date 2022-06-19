const $body = document.querySelector('body');
const IMG_NUMBER = 5;

function setBackground() {
  const selectImg = Math.floor(Math.random() * IMG_NUMBER);
  const url = `url(./img/${selectImg}.jpg)`;

  $body.style.backgroundImage = url;
}

setBackground();
