/* eslint-disable import/no-cycle */
import { MostrarUsuario, MostrarPostDelUsuario } from '../view-controller/view-profile.js';

export default (cb) => {
  const viewHome = `
  <div id="cuarta_vista">
    <div class="contenedorCabecera"></div>
    <div class="containerProfile">
      <section id="userDescription2"></section>
      <section id="containerPost"></section>
    </div>
</div> `;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      MostrarUsuario(user.email);
      MostrarPostDelUsuario(user.email);
    }
  });
  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;

  const contenedorCabecera = divElement.querySelector('.contenedorCabecera');
  cb(contenedorCabecera);

  return divElement;
};
