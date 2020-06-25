import crearComentarioTemplate from '../view/comentarios.js';

export const mostrarDataComentarios = (data, nodo) => {
  console.log(data);
  data.forEach((element) => {
    nodo.appendChild(crearComentarioTemplate(element));
  });
};
