/* eslint-disable import/no-cycle */
import { changeView } from './view-controller/router.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    if (user.emailVerified === false) {
      console.log('email no verificado');
    } else {
      changeView('#/home');
    }
  } else {
    changeView('#/');
    console.log('No logeado');
  }
});