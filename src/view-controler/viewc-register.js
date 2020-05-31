// eslint-disable-next-line import/no-cycle
import { createUser } from '../firebase/firebase-conexion.js';
// eslint-disable-next-line import/no-cycle
import { changeView } from './router.js';

export const registerIn = () => {
  const usuario = document.getElementById('usuario').value;
  const email = document.getElementById('correo').value;
  const password = document.getElementById('contraseña').value;
  createUser(email, password).then(() => {
    firebase.auth().currentUser.sendEmailVerification().then((user) => {
      if (user.emailVerifed === true) {
        changeView('#/home');
        console.log('creado');
      }
      else {
        changeView('#');
      }
    }).catch(() => {
      console.log('no valido correo');
    });
  }).catch(() => {
    console.log('error catch viwe');
    // msgAlert.classList.remove('ocult');
    setTimeout(() => {
      console.log('error catch viwe');
    //   msgAlert.classList.add('ocult');
    }, 3000);
  });
};
