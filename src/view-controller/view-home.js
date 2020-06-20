// eslint-disable-next-line import/no-cycle
import views from '../view/index.js';
// eslint-disable-next-line import/no-cycle
// import mostrarCabecera from '../view/header.js';
// import { changeView } from '../view-controller/router.js';
// import { signOut } from '../firebase/auth-controller.js';

const db = firebase.firestore();
export const MostrarUsuarioHome = (gmailUser) => {
  const userDescription = document.getElementById('userDescription');
  db.collection('users').where('gmail', '==', gmailUser).onSnapshot((querySnapshot) => {
    userDescription.innerHTML = '';
    querySnapshot.forEach((doc) => {
      userDescription.innerHTML = ' ';
      userDescription.appendChild(views.user(doc.data()));
    });
  });
};

// export const llamarCabecera = (contenedor) => {

// };

// console.log(result.user.displayName);
// console.log(result.user.email);
// console.log(result.user.emailVerified);
// console.log(result.user.photoURL);
// console.log(result.user.isAnonymous);
// console.log(result.user.uid);
// console.log(result.user.providerData);
// correo: doc.data().gmail,
// portada: doc.data().image_port,
// perfil: doc.data().image_profile,
// idioma: doc.data().lenguaje,
// nacionalidad: doc.data().location,
// nombre: doc.data().name_user,
// ocupacionUser: doc.data().ocupation,
