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
    // datos del objeto usuario
    console.log(`logeado ${user.email}`);
    console.log(user.uid);
    // propiedad verifica el estado de login o no
    if (user.emailVerified === false) {
      console.log('email no verificado');
    }
    if (user.emailVerified === true) {
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
