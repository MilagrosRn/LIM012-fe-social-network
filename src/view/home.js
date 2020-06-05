// eslint-disable-next-line import/no-cycle
import { close } from '../firebase/firebase-conexion.js';

export default () => {
  const viewHome = `
  <div id="tercera_vista_home">
    <header>
      <input type="checkbox" id="btn-menu">
      <label for="btn-menu">
        <img src="https://image.flaticon.com/icons/png/512/56/56763.png" class="icono-menu" alt="">
        <img src="imagenes/logo_oficial.png" class="img-logo-header">
      </label>
        <nav class="menu">
          <ul>
            <li class="logoNo"><a href=""><img src="imagenes/logo_oficial.png" class="img-logo-header"></a></li>
            <li class="fondot"><a href="#/home">INICIO</a></li>
            <li class="fondot"><a href="#/perfil">PERFIL</a></li>
            <li class="fondoB" id="close"><a href="#">CERRAR SESION</a></li>
          </ul>
        </nav>
    </header>
    <section class="post">
    <div class="title_user">
      <div class="img_user"></div>
      <div class="name_user">PELUCHA</div>
      <div class="menu_privacity_user">
        <div class="icon_menu"></div>
        <div class="icon_menu"></div>
        <div class="icon_menu"></div>
      </div>
    </div>
    <div class="description_post">
      <div class="description_text">
        <div class="button_send"></div>
      </div>
      
    </div>
    <div  class="options_post">
      <div class="option"></div>
      <div class="option"></div>
      <div class="option"></div>
    </div>
    </section>
  </header>
`;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;

  const btnCerrarSesion = divElement.querySelector('#close');
  btnCerrarSesion.addEventListener('click', close);
  return divElement;
};
