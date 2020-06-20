/* eslint-disable import/no-cycle */
import { postTemplate } from './post.js';
import { getUsers } from '../firebase/firestore-controller.js';
import { traerDataUsuario } from '../view-controller/view-home.js';

export default (data, cb) => {
  const viewHome = `
  <div id="tercera_vista_home">
    <div class="contenedorCabecera"></div>
    <div>
      <section id="userDescription"></section>
      <section class="space_post"></section>
    </div>
  </div>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;

  const spacePost = divElement.querySelector('.space_post');
  for (let i = 0; i < data.length; i += 1) {
    spacePost.appendChild(postTemplate(data[i]));
  }

  const user = firebase.auth().currentUser;
  getUsers(user.email, traerDataUsuario);

  const contenedorCabecera = divElement.querySelector('.contenedorCabecera');
  cb(contenedorCabecera);

  return divElement;
};
