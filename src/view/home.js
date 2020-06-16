/* eslint-disable import/no-cycle */
import { signOut } from '../firebase/auth-controller.js';
// import { consultarUsuario } from '../firebase/user-firestore.js';
import { MostrarUsuarioHome } from '../view-controller/view-home.js';
import { createPost, questionPost, loadImage } from '../model/posts.js';
import { changeView } from '../view-controller/router.js';

export default () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      MostrarUsuarioHome(user.email);
    }
  });
  // usuario logeado actualmente
  // const user = firebase.auth().currentUser;
  // console.log(user.photoURL);
  const viewHome = `
  <div id="tercera_vista_home">
    <header>
      <input type="checkbox" id="btn-menu">
      <div class = "div_header_menu">
        <label for="btn-menu">
          <i class="fas fa-bars icono-menu"></i>
        </label>
      </div>
      <nav class="menu">
        <ul>
          <li class="option_menu_list link_inicio"><i class="fas fa-user-circle"></i>
            <a >Inicio</a>
          </li>
          <li class="option_menu_list link_profile"><i class="fas fa-home"></i>
            <a >Perfil</a>
          </li>
          <li class="option_menu_list2 cerrar_sesion" id="close" ><i class="fas fa-times-circle"></i>
            <a >Cerrar sesión</a>
          </li>
        </ul>
      </nav>
      <div class="div_header_logo">
        <img src="imagenes/logo_oficial.png" class="img-logo-header">
      </div>
    </header>
    <div class="containerHome">
      <section id="userDescription"></section>
    </div>
    <section class="space_post"></section>
  </div>`;

  questionPost();
  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;

  const btninicio = divElement.querySelector('.link_inicio');
  const btnprofile = divElement.querySelector('.link_profile');
  const btnCerrarSesion = divElement.querySelector('.cerrar_sesion');

  // menu hamburguesa
  btninicio.addEventListener('click', (() => {
    changeView('#/home');
  }));

  btnprofile.addEventListener('click', () => {
    changeView('#/profile');
  });

  btnCerrarSesion.addEventListener('click', signOut);

  return divElement;
};