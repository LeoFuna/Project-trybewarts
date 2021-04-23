const login = document.querySelector('#login');
const password = document.querySelector('#password');
const join = document.querySelector('#join');
const feedback = document.querySelector('.feedback');

for (let index = 1; index <= 10; index += 1) {
  const label = document.createElement('label');
  const radio = document.createElement('input');
  label.innerText = index;
  radio.type = 'radio';
  radio.name = 'rate';
  radio.value = index;
  label.appendChild(radio);
  feedback.appendChild(label);
}

join.addEventListener('click', (e) => {
  e.preventDefault();
  const validLogin = login.value;
  const validPassword = password.value;
  if (validLogin === 'tryber@teste.com' && validPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
  login.value = '';
  password.value = '';
});
