/* eslint-disable import/no-cycle */
import mostrarCabecera from '../view/header.js';
import vistaUsuario from '../view/user.js';
import views from '../view/index.js';

export const llamarCabecera = (contenedor) => {
  contenedor.appendChild(mostrarCabecera());
};
export const traerDataPost = (data) => {
  const seccion = document.getElementById('seccion');
  seccion.innerHTML = '';
  seccion.appendChild(views.home(data, llamarCabecera));
};

export const traerDataUsuario = (dataUser) => {
  const descriptionUsuario = document.querySelector('#userDescription');
  descriptionUsuario.innerHTML = '';
  descriptionUsuario.appendChild(vistaUsuario(dataUser));
};
