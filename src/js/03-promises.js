import { Notify } from 'notiflix';

const form = document.querySelector('.form');

const createPromise = (position, delay) => {
  return new Promise((res, rej) => {
    setTimeout(()=>{
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      res({ position, delay });
    } else {
      rej({ position, delay });
    }
  },delay)
  });
};

form.addEventListener('submit', e => {
  e.preventDefault();
  const delay = parseInt(e.target.delay.value);
  const step = parseInt(e.target.step.value);
  const amount = parseInt(e.target.amount.value);
  for (let i = 0; i < amount; i++) {
    const currentDelay = delay + i * step;
    createPromise(i + 1, currentDelay)
      .then(value => {
        Notify.success(
          `✅ Fulfilled promise ${value.position} in ${value.delay}ms`
        );
      })
      .catch(err => {
        Notify.failure(`❌ Rejected promise ${err.position} in ${err.delay}ms`);
      });
  }
});
