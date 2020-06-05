/* eslint-disable import/no-cycle */
import { changeView } from './view-controller/router.js';
// import { getPosts } from './view-controller/view-home.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // datos del objeto usuario
    const displayName = user.displayName;
    const email = user.email;
    const emailVerified = user.emailVerified;
    const photoURL = user.photoURL;
    const isAnonymous = user.isAnonymous;
    const uid = user.uid;
    const providerData = user.providerData;
    console.log(`logeado${user.email}`);
    // propiedad verifica el estado de login o no
    if (emailVerified === false) {
      console.log('email no verificado');
    } else {
      changeView('#/home');
      // getPosts();
    }
  } else {
    console.log('No logeado');
  }
});
