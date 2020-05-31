// eslint-disable-next-line import/no-cycle
import { changeView } from '../view-controler/router.js';

const auth = firebase.auth();
const createUser = (e, password) => auth.createUserWithEmailAndPassword(e, password);
const loguearUser = (email, password) => auth.signInWithEmailAndPassword(email, password);
const validateGmail = () => auth.currentUser.sendEmailVerification();
const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .catch(() => console.log('error google'))
    .then(() => changeView('#/home'));
};
const loguinFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider)
    .catch(() => console.log('error facebook'))
    .then(() => changeView('#/home'));
};
const close = () => auth.signOut();
export {
  createUser, loguearUser, validateGmail, close, loginGoogle, loguinFacebook,
};
