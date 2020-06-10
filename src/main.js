/* eslint-disable import/no-cycle */
import { changeView } from './view-controller/router.js';
// import { getPosts } from './view-controller/view-home.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDSv47hDN_B_cE3_GHAKDvGGdhhkkQ8Kjg',
  authDomain: 'red-social-2085d.firebaseapp.com',
  databaseURL: 'https://red-social-2085d.firebaseio.com',
  projectId: 'red-social-2085d',
  storageBucket: 'red-social-2085d.appspot.com',
  messagingSenderId: '603475371255',
  appId: '1:603475371255:web:f81d07259172e52d041ff2',
  measurementId: 'G-WQ56DR07CB',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);
// const db = firebase.firestore();

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


    // if (user.photoURL) {
    //   setTimeout(document.querySelector('.img_user_post').src = user.photoURL,
    //     15000);
    // } else {
    //   setTimeout(
    //     document.querySelector('.img_user_post').src = 'degradado.png',
    //     15009,
    //   );
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
// const displayName = user.displayName;
// const email = user.email;
// const emailVerified = user.emailVerified;
// const photoURL = user.photoURL;
// const isAnonymous = user.isAnonymous;
// const uid = user.uid;
// const providerData = user.providerData;
// console.log(displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData);
// console.log(user);
