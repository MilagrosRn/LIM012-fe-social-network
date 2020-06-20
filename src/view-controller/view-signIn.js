import { createAccount, signInAccount } from '../firebase/authentification.js';

const registrarUsuario = () => {
  const email = document.querySelector('.correo').value;
  const password = document.querySelector('.coontraseña').value;
  const user = document.querySelector('.usuario').value;
  const stateCheckbox = document.querySelector('#condiciones').checked;
  const divValidations = document.querySelector('.divValidations');
  divValidations.style.color = 'red';
  // createAccount(email, password, user)

  if (email === '') {
    divValidations.textContent = 'Querido usuario, ingresa un email';
  } else if (password === '') {
    divValidations.textContent = 'Querido usuario, ingresa una contraseña';
  } if (stateCheckbox === false) {
    divValidations.textContent = 'Querido usuario, debe aceptar los términos y condiciones';
  } else {
    createAccount(email, password, user);
  }
};
const inicioSesion = () => {
  const email = document.querySelector('.correo').value;
  const password = document.querySelector('.coontraseña').value;
  const divValidationsLogin = document.querySelector('.divValidationsLogin');
  if (email === '') {
    divValidationsLogin.textContent = 'Querido usuario, ingresa un email';
  } else if (!(email.includes('@'))) {
    divValidationsLogin.textContent = 'Querido usuario, ingresa un email valido';
  } else if (password === '') {
    divValidationsLogin.textContent = 'Querido usuario, ingresa una contraseña';
  } else {
    signInAccount(email, password);
  }
};
export {
  registrarUsuario,
  inicioSesion,
};
