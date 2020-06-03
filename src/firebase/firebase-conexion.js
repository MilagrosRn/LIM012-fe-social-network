/* eslint-disable max-len */
const loguearUser = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);
const createUser = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);
const verificationEmail = () => firebase.auth().currentUser.sendEmailVerification();
const close = () => firebase.auth().signOut();

export {
  createUser, loguearUser, verificationEmail, close,
};
