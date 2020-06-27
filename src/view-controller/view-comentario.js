/* eslint-disable import/no-unresolved */
import crearComentarioTemplate from '../view/comentario.js';

export const mostrarDataComentarios = (data, nodo) => {
  console.log(data);
  data.forEach((element) => {
    nodo.appendChild(crearComentarioTemplate(element));
  });
};
