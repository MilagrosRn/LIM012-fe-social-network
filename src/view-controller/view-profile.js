import vistaUsuarioProfile from '../view/userProfile.js';
import views from '../view/index.js';
import { llamarCabecera } from './view-home.js';

export const traerDataPostUser = (data) => {
  const seccion = document.getElementById('seccion');
  seccion.innerHTML = '';
  seccion.appendChild(views.profile(data, llamarCabecera));
};
export const traerDataUsuarioProfile = (dataUser) => {
  const descriptionUsuario = document.querySelector('#userDescription2');
  descriptionUsuario.innerHTML = '';
  descriptionUsuario.appendChild(vistaUsuarioProfile(dataUser));
};
