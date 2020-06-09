// eslint-disable-next-line import/no-cycle
import views from '../view/index.js';

const db = firebase.firestore();
export const MostrarUsuario = (gmailUser) => {
  const mostrarUsuario = document.getElementById('userDescription');
  // db.collection('users').where('gmail', '==', gmailUser)
  //   .get()
  //   .then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       // console.log(doc.id, ' => ', doc.data());
  //       mostrarUsuario.innerHTML = ' ';
  //       mostrarUsuario.appendChild(views.user(doc));
  //     });
  //   })
  //   .catch((error) => {
  //     console.log('Error extraer documents: ', error);
  //   });
  db.collection('users').where('gmail', '==', gmailUser).onSnapshot((querySnapshot) => {
    mostrarUsuario.innerHTML = '';
    querySnapshot.forEach((doc) => {
      mostrarUsuario.innerHTML = ' ';
      mostrarUsuario.appendChild(views.user(doc));
    });
  });
};

export const modificarUser = (emailUser, ocupacionUser, locacionUser, lenguajeUser) => {
  db.collection('users').doc(emailUser).update({
    lenguaje: lenguajeUser,
    location: locacionUser,
    ocupation: ocupacionUser,
  });
};
// console.log(result.user.displayName);
// console.log(result.user.email);
// console.log(result.user.emailVerified);
// console.log(result.user.photoURL);
// console.log(result.user.isAnonymous);
// console.log(result.user.uid);
// console.log(result.user.providerData);
