
const body = document.querySelector('body');
const strtBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let interval = null;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const handleStart = () => {
  body.style.backgroundColor = getRandomHexColor();
  interval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  strtBtn.disabled = true;
  stopBtn.disabled = false;
};

const handleStop = () => {
  clearInterval(interval);
  strtBtn.disabled = false;
  stopBtn.disabled = true;
};

strtBtn.addEventListener('click', handleStart);
stopBtn.addEventListener('click', handleStop);
