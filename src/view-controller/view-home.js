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
