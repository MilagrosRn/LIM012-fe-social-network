// eslint-disable-next-line import/no-cycle
import { loguearUser } from '../firebase/firebase-conexion.js';
// eslint-disable-next-line import/no-cycle
import { changeView } from './router.js';

export const signingIn = () => {
  const email = document.querySelector('.correoL').value;
  const password = document.querySelector('.contraseñaL').value;
  const msjError1 = document.querySelector('#msjError1');

  loguearUser(email, password).then(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      console.log(user.emailVerified);
      if (user.emailVerified === true) {
        changeView('#/home');
      } else {
        msjError1.innerHTML = '<p class="alerta">Falta verificar correo</p>';
      }
    });
  }).catch(() => {
    msjError1.innerHTML = '<p class="alerta">Correo o contraseña invalida</p>';
  });
};
