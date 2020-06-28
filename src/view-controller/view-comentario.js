import crearComentarioTemplate from '../view/comentarios.js';

export const mostrarDataComentarios = (data, nodo) => {
  data.forEach((element) => {
    nodo.appendChild(crearComentarioTemplate(element));
  });
};

export const agregarComentario = (idComentario, documento) => firebase.firestore().collection('posts').doc(documento.id).update({
  contadorComentarios: firebase.firestore.FieldValue.arrayUnion(idComentario),
});

export const quitarComentario = (idComentario, documento) => firebase.firestore().collection('posts').doc(documento.id).update({
  likes: firebase.firestore.FieldValue.arrayRemove(idComentario),
});
