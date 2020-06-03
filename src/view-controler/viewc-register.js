// eslint-disable-next-line import/no-cycle
import { createUser } from '../firebase/firebase-conexion.js';
// eslint-disable-next-line import/no-cycle
import { changeView } from './router.js';

export const registerIn = () => {
  const usuario = document.getElementById('usuario').value;
  const email = document.getElementById('correo').value;
  const password = document.getElementById('contraseña').value;
  const msjError = document.getElementById('msjError');

  createUser(email, password).then(() => {
    firebase.auth().currentUser.sendEmailVerification().then(() => {
      //  changeView('#/home');
      const modal = document.getElementById('validarModal');
      const span = document.getElementsByClassName('close')[0];
      const body = document.getElementsByTagName('body')[0];
      modal.style.display = 'block';
      body.style.position = 'static';
      body.style.height = '100%';
      body.style.overflow = 'hidden';
      span.onclick = () => {
        modal.style.display = 'none';
        body.style.position = 'inherit';
        body.style.height = 'auto';
        body.style.overflow = 'visible';
        changeView('#/login');
      };
      window.onclick = (event) => {
        if (event.target === modal) {
          modal.style.display = 'none';
          body.style.position = 'inherit';
          body.style.height = 'auto';
          body.style.overflow = 'visible';
        }
      };
    }).catch((error) => {
      msjError.innerHTML = `error, vuelva a intentarlo ${error}`;
      console.log('no valido correo');
    });
  }).catch(() => {
    msjError.innerHTML = '<p class="alerta">Debe llenar todos los campos son obligatoiros</p>';
  });
};
