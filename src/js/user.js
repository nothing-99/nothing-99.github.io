const loginForm = document.querySelector('.user-container form');
const loginInput = loginForm.querySelector('input');
const loginDisplay = document.querySelector('.user-container span');

const HIDDEN_CLASS = 'hidden';
const USERNAME_KEY = 'username';

function displayUsername(username) {
  loginDisplay.innerText = `Today Todo of ${username}`;
  loginInput.classList.add(HIDDEN_CLASS);
  loginDisplay.classList.remove(HIDDEN_CLASS);
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = loginInput.value;

  displayUsername(username);

  localStorage.setItem(USERNAME_KEY, username);
  loginInput.value = '';
})

if (localStorage.getItem(USERNAME_KEY)) {
  displayUsername(localStorage.getItem(USERNAME_KEY));
}
