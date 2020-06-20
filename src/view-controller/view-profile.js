import views from '../view/index.js';
import { postTemplate } from '../view/post.js';

const db = firebase.firestore();
export const MostrarUsuario = (gmailUser) => {
  const mostrarUsuario = document.getElementById('userDescription2');
  // db.collection('users').where('gmail', '==', gmailUser)
  //   .get()
  //   .then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //     });
  //   })
  //   .catch((error) => {
  //   });
  db.collection('users').where('gmail', '==', gmailUser).onSnapshot((querySnapshot) => {
    mostrarUsuario.innerHTML = ' ';
    querySnapshot.forEach((doc) => {
      mostrarUsuario.innerHTML = ' ';
      mostrarUsuario.appendChild(views.userProfile(doc.data()));
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

const holePostTemplate = () => `
<section class ="vacio_post">
    <img class="logo_vacio_post" src="../imagenes/logoColor.png" >
    <h2>Es momento de publicar un post</h2>
</section>
`;
export const MostrarPostDelUsuario = (gmailUser) => {
  db.collection('posts').where('gmail', '==', gmailUser).onSnapshot((querySnapshot) => {
    const containerPost = document.getElementById('containerPost');
    containerPost.innerHTML = ' ';
    if (querySnapshot === '') {
      containerPost.innerHTML = holePostTemplate();
    } else {
      querySnapshot.forEach((doc) => {
        containerPost.appendChild(postTemplate(doc));
      });
    }
  });
};
