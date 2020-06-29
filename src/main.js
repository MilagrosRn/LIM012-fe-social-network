/* eslint-disable import/no-cycle */
import { changeView } from './view-controller/router.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('logeado');
    if (user.emailVerified === false) {
      console.log('email no verificado');
    } else {
      changeView('#/home');
      const userCurrent = firebase.auth().currentUser;
      if (userCurrent.photoURL === null) {
        userCurrent.updateProfile({
          photoURL: 'https://i1.wp.com/unimooc.com/wp-content/uploads/2015/04/corazon-comida-sana.jpg',
        }).then(() => {
          console.log('se cambio la imagen');
        }).catch(() => {
          console.log('no se cambio la imagen');
        });
      }
    }
  } else {
    changeView('#/');
    console.log('No logeado');
  }
});

