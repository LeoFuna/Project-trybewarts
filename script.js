const buttonLogin = document.getElementById('buttonLogin');

buttonLogin.addEventListener('click', () => {
  const inputEmail = document.getElementById('loginEmail').value;
  const inputPasswd = document.getElementById('loginPassword').value;

  if (inputEmail === 'tryber@teste.com' && inputPasswd === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
// 18
const checkbox = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');
submit.disabled = true;

checkbox.addEventListener('click', () => {
  if (checkbox.checkbox === '') {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
});
