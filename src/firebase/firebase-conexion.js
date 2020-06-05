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
// const writeUSer = () => {
//   firebase.firestore()
//   image_port 
//   image_profile 
//   lenguage 
//   locacion 
//   name_user
//   ocupation
// };
const createPost = (newPost) => {
  firebase.firestore().collection('posts').add({
    description: newPost,
    likes: 0,
    name_user: '',
    states: true,
  });
};
const deletePosts = (idPosts) => {
  firebase.firestore().collection('posts').doc(idPosts).delete();
};
const getPosts = (callback) => {
  firebase.firestore().collection('notes')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      callback(data);
    });
};
const close = () => auth.signOut();
export {
  // eslint-disable-next-line max-len
  createUser, loguearUser, validateGmail, close, loginGoogle, loguinFacebook, createPost, deletePosts, getPosts,
};
