const auth = firebase.auth;
const loguearUser = (email, password) => auth.signInWithEmailAndPassword(email, password);
const createUser = (email, password) => auth.createUserWithEmailAndPassword(email, password);
const close = () => auth.signOut();
export { createUser, loguearUser, close };
