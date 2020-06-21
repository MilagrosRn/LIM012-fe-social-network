/* eslint-disable import/no-cycle */
import { changeView } from './view-controller/router.js';
// import { getPostss } from './view-controller/view-home.js';


const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);
// const db = firebase.firestore();

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
// const displayName = user.displayName;
// const email = user.email;
// const emailVerified = user.emailVerified;
// const photoURL = user.photoURL;
// const isAnonymous = user.isAnonymous;
// const uid = user.uid;
// const providerData = user.providerData;
// console.log(displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData);
// console.log(user);
// if (user) {
//   const displayName = user.displayName;
//   const email = user.email;
//   const emailVerified = user.emailVerified;
//   const photoURL = user.photoURL;
//   const isAnonymous = user.isAnonymous;
//   const uid = user.uid;
//   const providerData = user.providerData;
//   console.log(`logeado${user.email}`);


// if (user.photoURL) {
//   setTimeout(document.querySelector('.img_user_post').src = user.photoURL,
//     15000);
// } else {
//   setTimeout(
//     document.querySelector('.img_user_post').src = 'degradado.png',
//     15009,
//   );
// }

//   if (emailVerified) {
//     console.log('email verificado y logeado');
//     changeView('#/home');
//     // getPostss();
//   } else {
//     const divValidationsLogin = document.querySelector('.divValidationsLogin');
//     divValidationsLogin.textContent = 'Debes validar tu email para continuar';
//     console.log('email no verificado');
//   }
// } else {
//   changeView('#/');
//   console.log('No logeado');
// }
