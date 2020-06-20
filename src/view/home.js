/* eslint-disable import/no-cycle */
import { MostrarUsuarioHome } from '../view-controller/view-home.js';
import { questionPost } from '../view-controller/view-posts.js';

export default (cb) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      MostrarUsuarioHome(user.email);
    }
  });

  const viewHome = `
  <div id="tercera_vista_home">
    <div class="contenedorCabecera"></div>
    <div>
      <section id="userDescription"></section>
      <section class="space_post"></section>
    </div>
  </div>`;

  questionPost();
  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;

  const contenedorCabecera = divElement.querySelector('.contenedorCabecera');
  cb(contenedorCabecera);

  return divElement;
};
