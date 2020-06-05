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
