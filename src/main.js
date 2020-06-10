/* eslint-disable import/no-cycle */
import { changeView } from './view-controller/router.js';
// import { getPosts } from './view-controller/view-home.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);
// const db = firebase.firestore();
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // datos del objeto usuario
    console.log(`logeado ${user.email}`);
    console.log(user.uid);
    // propiedad verifica el estado de login o no
    if (user.emailVerified === false) {
      console.log('email no verificado');
    } else {
      changeView('#/home');
      // getPosts();
    }
  } else {
    console.log('No logeado');
  }
});
// const displayName = user.displayName;
// const email = user.email;
// const emailVerified = user.emailVerified;
// const photoURL = user.photoURL;
// const isAnonymous = user.isAnonymous;
// const uid = user.uid;
// const providerData = user.providerData;
// console.log(displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData);
// console.log(user);
