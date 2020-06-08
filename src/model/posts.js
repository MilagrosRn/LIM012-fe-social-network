/* eslint-disable max-len */
import { postTemplate } from '../view-controller/view-post.js';

// import { op } from '../view-controller/view-home.js';
// // formas de agregar el objeto
// localStorage.setItem('Nombre', 'Miguel Antonio');
// localStorage.Apellido = 'Márquez Montoya';
// // llamar el objeto
// const firstName = localStorage.getItem('Nombre');
// const lastName = localStorage.Apellido;
// // // eliminar datos
// // localStorage.removeItem(Apellido);
// // // limpiar todo el objeto
// // localStorage.clear();
// document.getElementById('prueba').innerHTML = (`Hola, mi nombre es ${firstName} ${lastName}`);

const constructorPost = () => {
  const settings = {
    timestampsInSnapshots: true,
  };
  firebase.firestore().settings(settings);
};

// CREAR POST

const createPost = (_uid, _nameUser, _description, _privacity, _likes) =>
  // entra ala coleccion y si no hay la crea
  // si usamos add crea un id
  firebase.firestore().collection('posts').add({
    uid: _uid,
    autor: _nameUser,
    description: _description,
    likes: _likes,
    privacity: _privacity,
    date: firebase.firestore.FieldValue.serverTimestamp(),
  })
    .then((ref) => {
      console.log(ref.id);
    })
    .catch((error) => {
      console.log(error);
    });

// CONSULTAR UN DATOS DEL POST

// const questionPost = (data) => {
// //   firebase.firestore().collection('posts').onSnapshot((changeSnapshot) => {
//   // si hay un documento nuevo o se actualiza
//   const dataPost = document.querySelector('.post');
// //   dataPost.innerText = '';
//   if (dataPost === '') {
//     //   // const sinPost = document.createElement('p');
//     //   //   sinPost.textContent();
//     //   dataPost.appendChild(this.liPost());
//     // } else {
//     data.forEach((posts) => {
//       // const postHtml = this;
//       const value = mio(posts.data().autor,
//         posts.data().date, posts.data().description,
//         posts.data().likes, posts.data().privacity, posts.data().fecha);
//       const sinPost = document.createElement('div');

//       value.appendChild(sinPost);
//       sinPost(dataPost);
//       // dataPost.appendChild(postHtml);
//     });
//   }
// };


const questionPost = () => {
  firebase.firestore().collection('posts').onSnapshot((querySnapshot) => {
    const dataPost = document.querySelector('.space_post');
    dataPost.innerHTML = '';
    querySnapshot.forEach((postData) => {
      console.log(`${postData.id} => ${postData.data()}`);
      dataPost.innerHTML
    += postTemplate(postData);
    });
  });
};

export { createPost, questionPost };
