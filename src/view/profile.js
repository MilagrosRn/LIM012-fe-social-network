/* eslint-disable import/no-cycle */
import { signOut } from '../firebase/auth-controller.js';
// import { consultarUsuario } from '../firebase/user-firestore.js';
import { MostrarUsuario, MostrarPostDelUsuario } from '../view-controller/view-profile.js';
import { changeView } from '../view-controller/router.js';

export default () => {
  const viewHome = `
  <div id="cuarta_vista">
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
            <a >Inicio</a></li>
          <li class="option_menu_list link_profile"><i class="fas fa-home"></i>
            <a >Perfil</a></li>
          <li class="option_menu_list2 cerrar_sesion" id="close" ><i class="fas fa-times-circle"></i>
            <a >Cerrar sesión</a></li>
          </ul>
        </nav>
      <div class="div_header_logo">
        <img src="imagenes/logo_oficial.png" class="img-logo-header">
      </div>
    </header>
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

  const btninicio = divElement.querySelector('.link_inicio');
  const btnprofile = divElement.querySelector('.link_profile');
  const btnCerrarSesion = divElement.querySelector('.cerrar_sesion');
  btninicio.addEventListener('click', (() => {
    changeView('#/home');
  }));
  btnprofile.addEventListener('click', () => {
    changeView('#/profile');
  });
  btnCerrarSesion.addEventListener('click', signOut);
  return divElement;
};
