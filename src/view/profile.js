/* eslint-disable import/no-cycle */
import { traerUsuarios } from '../firebase/firestore-controller.js';
import { postTemplate } from './post.js';
import { traerDataUsuarioProfile } from '../view-controller/view-profile.js';

export default (data, cb) => {
  const viewHome = `
  <div id="cuarta_vista">
    <div class="contenedorCabecera"></div>
    <div class="contenedorContenido">
      <section id="userDescription2"></section>
      <section id="containerPost"></section>
    </div>
</div> `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;

  const user = firebase.auth().currentUser;
  const containerPost = divElement.querySelector('#containerPost');
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].data().gmail === user.email) {
      containerPost.appendChild(postTemplate(data[i]));
    }
  }

  traerUsuarios(user.email, traerDataUsuarioProfile);

  const contenedorCabecera = divElement.querySelector('.contenedorCabecera');
  cb(contenedorCabecera);

  return divElement;
};
