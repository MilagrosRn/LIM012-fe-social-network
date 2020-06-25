// import crearComentarioTemplate from '../view/comentarios.js';

// export const agregarComentario = (_gmail, _idPost, _autor, _contenido) => firebase.firestore().collection('comentarios').doc(_gmail).set({
//   idPost: _idPost,
//   autor: _autor,
//   contenido: _contenido,
// });

// export const crearComentario2 = (_gmail, _idPost, _autor, _contenido) => firebase.firestore().collection('comentarios').add({
//   gmail: _gmail,
//   idPost: _idPost,
//   autor: _autor,
//   contenido: _contenido,
// });

// export const eliminarComentario = (doc) => {
//   firebase.firestore().collection('comentarios').doc(doc).delete()
//     .then(() => {
//       console.log('Document successfully deleted!');
//     })
//     .catch((error) => {
//       console.error('Error removing document: ', error);
//     });
// };

// export const modificarComentario = (idComentario, _contenido) => {
//   firebase.firestore().collection('comentarios').doc(idComentario).update({
//     contenido: _contenido,
//   });
// };
// export const traerComentarios = (callback) => {
//   firebase.firestore().collection('comentarios').onSnapshot((querySnapshot) => {
//     const data = [];
//     querySnapshot.forEach((comentData) => {
//       data.push(comentData);
//     });
//     callback(data);
//   });
// };
// export const mostrarDataComentarios = (data) => {
//   const nodo = document.querySelector('.mostrarComentarios');
//   nodo.appendChild(crearComentarioTemplate(data));
// };
