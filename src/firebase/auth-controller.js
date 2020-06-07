// funciones de autentificacion de firebase
const signIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

const createUser = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
const signOut = () => firebase.auth().signOut();

export {
  signIn, createUser, signInGoogle, signOut,
};
// JUDITH
// Acceso de usuarios existentes: https://firebase.google.com/docs/auth/web/start?hl=es-419
// let email; let password;
// firebase.auth().signInWithEmailAndPassword(email, password)
//   .then(() => {

//   })
//   .catch((error) => {
//     console.log(error);
//   });
