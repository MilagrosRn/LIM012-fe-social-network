/* eslint-disable import/no-cycle */
// import { changeView } from './router.js';

import { changeView } from './router.js';

// funcion controladora de estados de firebase


const loginFunction = () => {
  const email = document.querySelector('.correo').value;
  const password = document.querySelector('.coontraseña').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
    });
};

const loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .catch(() => console.log('error facebook'))
    .then(() => changeView('#/home'));
};

const loginGoogle = () => {
  // para acceder con un Proveedor de autenticación de Google.
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .catch(res => console.log('error googl'))
    .then(res => console.log(' googl'));
};
export { loginFunction, loginFacebook, loginGoogle };
// // Using a popup.
// var provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope('profile');
// provider.addScope('email');
// firebase.auth().signInWithPopup(provider).then(function(result) {
//  // This gives you a Google Access Token.
//  var token = result.credential.accessToken;
//  // The signed-in user info.
//  var user = result.user;
// });
