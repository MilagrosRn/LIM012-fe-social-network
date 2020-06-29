/* eslint-disable import/no-cycle */
import crearComentarioTemplate from '../view/comentarios.js';

export const mostrarDataComentarios = (data, nodo, id) => {
  data.forEach((element) => {
    nodo.appendChild(crearComentarioTemplate(element, id));
  });
};

export const agregarComentario = (idComentario, documento) => firebase.firestore().collection('posts').doc(documento.id).update({
  contadorComentarios: firebase.firestore.FieldValue.arrayUnion(idComentario),
});

export const quitarComentario = (idComentario, documento) => firebase.firestore().collection('posts').doc(documento.id).update({
  contadorComentarios: firebase.firestore.FieldValue.arrayRemove(idComentario),
});
