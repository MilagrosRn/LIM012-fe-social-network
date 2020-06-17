// eslint-disable-next-line import/no-cycle
import views from '../view/index.js';

const db = firebase.firestore();
export const MostrarUsuarioHome = (gmailUser) => {
  const userDescription = document.getElementById('userDescription');
  db.collection('users').where('gmail', '==', gmailUser).onSnapshot((querySnapshot) => {
    userDescription.innerHTML = '';
    querySnapshot.forEach((doc) => {
      userDescription.innerHTML = ' ';
      userDescription.appendChild(views.userModificado(doc.data()));
    });
  });
};
// export const MostrarUsuarioForPost = (gmailUser) => {
//   const seccion = document.getElementById('seccion');
//   db.collection('users').where('gmail', '==', gmailUser).onSnapshot((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       seccion.innerHTML = '';
//       querySnapshot.forEach((doc) => {
//         seccion.innerHTML = ' ';
//         seccion.appendChild(views.home(doc.data()));
//       });
//     // console.log();
//     });
//   });
// };
// console.log(MostrarUsuarioForPost('judith086.jpc@gmail.com'));
