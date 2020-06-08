/* eslint-disable import/no-cycle */
import { changeView } from './view-controller/router.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const displayName = user.displayName;
    const email = user.email;
    const emailVerified = user.emailVerified;
    const photoURL = user.photoURL;
    const isAnonymous = user.isAnonymous;
    const uid = user.uid;
    const providerData = user.providerData;
    console.log(`logeado${user.email}`);

    // if (photoURL) {
    //   // const imagenUser = document.querySelector('.img_avatar_user');
    //   const imagenUser = document.createElement('img');
    //   document.body.appendChild(imagenUser);
    //   imagenUser.src = photoURL;
    // } else {
    //   // const imagenUser = document.querySelector('.img_avatar_user');
    //   const imagenUser = document.createElement('img');
    //   document.body.appendChild(imagenUser);
    //   imagenUser.src = '../imagenes/degradado.png';
    // }
    if (emailVerified) {
      console.log('email verificado y logeado');
      changeView('#/home');
      // getPosts();
    } else {
      const divValidationsLogin = document.querySelector('.divValidationsLogin');
      divValidationsLogin.textContent = 'Debes validar tu email para continuar';
      console.log('email no verificado');
    }
  } else {
    changeView('#/');
    console.log('No logeado');
  }
});
