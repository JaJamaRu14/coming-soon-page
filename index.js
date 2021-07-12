const emailInput = document.querySelector('#email');
const form = document.querySelector('#form');
const alertP = document.querySelector('#alert p');
const alertDiv = document.querySelector('#alert');
const regex =
  /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

form.addEventListener('submit', alertMsg);

function alertMsg(e) {
  e.preventDefault();

  if (emailInput.value.match(regex)) {
    alertP.textContent = 'Thanks for signing up!';
    alertStyle('hsl(223, 87%, 63%)', 600);
  } else if (emailInput.value === '') {
    alertP.textContent = 'Whoops! It looks like you forgot to add your email';
    alertStyle('hsl(354, 100%, 66%)', 400);
  } else {
    alertP.textContent = 'Please provide a valid email address';
    alertStyle('hsl(354, 100%, 66%)', 400);
  }
}

function alertStyle(color, weight) {
  alertDiv.style.visibility = 'visible';
  alertP.style.color = color;
  alertP.style.fontWeight = weight;
  emailInput.style.border = `1px solid ${color}`;
}
