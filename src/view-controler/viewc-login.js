// eslint-disable-next-line import/no-cycle
import { loguearUser } from '../firebase/firebase-conexion.js';
// eslint-disable-next-line import/no-cycle
import { changeView } from './router.js';

export const signingIn = () => {
  const email = document.querySelector('.correoL').value;
  const password = document.querySelector('.contraseñaL').value;

  loguearUser(email, password).then(() => {
    // validation(changeView);
    changeView('#/home');
  }).catch((error) => {
    console.log(error);
    // msgAlert.classList.remove('ocult');
    setTimeout(() => {
      console.log('error catch viwe');
    //   msgAlert.classList.add('ocult');
    }, 3000);
  });
};
