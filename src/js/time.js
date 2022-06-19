const time = document.querySelector('.time-container span:nth-child(1)');
const day = document.querySelector('.time-container span:nth-child(2)');

const WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

setInterval(() => {
  const date = new Date();
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());
  const weekDay = WEEK[date.getDay()];
  time.innerText = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
  day.innerText = `${weekDay}`;
}, 1000)
