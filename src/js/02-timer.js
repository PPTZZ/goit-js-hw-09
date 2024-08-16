import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const mins = document.querySelector('span[data-minutes]');
const secs = document.querySelector('span[data-seconds]');

let interval;
let today;
let timer;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    today = new Date();
    if (selectedDates[0].getTime() - today.getTime() <= 0) {
      selectedDates[0] = today;
      alert('Please choose a date in the future');
    } else {
      timer = selectedDates[0].getTime() - today.getTime();
      startBtn.disabled = false;
      clearInterval(interval);
      days.innerText = '00';
      hours.innerText = '00';
      mins.innerText = '00';
      secs.innerText = '00';
    }
  },
};

flatpickr('#datetime-picker', options);

// Calculating time
const remainingTime = timer => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const reDays = Math.floor(timer / day);
  const reHours = Math.floor((timer % day) / hour);
  const reMinutes = Math.floor(((timer % day) % hour) / minute);
  const reSeconds = Math.floor((((timer % day) % hour) % minute) / second);

  return { reDays, reHours, reMinutes, reSeconds };
};

const addLeadingZero = (value)=>{
    const keys = Object.keys(remainingTime(value));
    for (const key of keys) {
        let digits = remainingTime(value)[key].toString()
        if (digits.length === 1){
            
        }
      }
}


startBtn.addEventListener('click', () => {
    addLeadingZero(timer);
  interval = setInterval(() => {
    const { reDays, reHours, reMinutes, reSeconds } = remainingTime(timer);
    days.innerText = reDays;
    hours.innerText = reHours;
    mins.innerText = reMinutes;
    secs.innerText = reSeconds;
    timer -= 1000;
    if (timer <= 0) {
      clearInterval(interval);
    }
  }, 1000);
});
