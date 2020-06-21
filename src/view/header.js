// eslint-disable-next-line import/no-cycle
// import { changeView } from '../view-controller/router.js';
import { signOut } from '../firebase/auth-controller.js';

export default function mostrarCabecera() {
  const vistaCabecera = `
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
  </div>`;

  const divElement = document.createElement('header');
  divElement.innerHTML = vistaCabecera;

  const btninicio = divElement.querySelector('.link_inicio');
  const btnprofile = divElement.querySelector('.link_profile');
  const btnCerrarSesion = divElement.querySelector('.cerrar_sesion');

  btninicio.addEventListener('click', () => {
    window.location.hash = '#/home';
  });
  btnprofile.addEventListener('click', () => {
    window.location.hash = '#/profile';
  });
  btnCerrarSesion.addEventListener('click', signOut);

  return divElement;
}
