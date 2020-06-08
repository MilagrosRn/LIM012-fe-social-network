/* eslint-disable import/no-cycle */
import { signOut } from '../firebase/auth-controller.js';
import { consultarUsuario } from '../firebase/user-firestore.js';

export default () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      consultarUsuario(user.email);
    }
  });
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
          <li class="fondotransparente"><a href="#/home">INICIO</a></li>
          <li class="fondotransparente"><a href="#/perfil">PERFIL</a></li>
          <li class="fondoBlanco" id="close"><a href="#">CERRAR SESION</a></li>
        </ul>
      </nav>
  </header>
  <section id="userDescription"></section>
  <section class="post">
    <div class="title_user">
      <figure class="data_user">
        <div class="img_user">
        </div>
        <div class="name_user">
          <h2>PELUCHA REYNA</h2>
          <h3>hace dos minutos</h3>
        </div>
      </figure>   
      <div class="menu_privacity_user">
      <div class="icon_privacity"><i class="fas fa-lock"></i></div>
      <div class="icon_privacity"><i class="fas fa-globe-americas"></i></div>
    </div>
  </div>
    <div class="description_post">
      <div class="description_text">
      <p class="text_post">¿Qué estas pensando?</p>
        <div class="button_send"><i class="fas fa-paper-plane"></i></div>
      </div>
    </div>
    <div  class="options_post">
      <div class="option">
        <i class="fas fa-camera"></i>
        <p>Foto</p>
      </div>
      <div class="option">
        <i class="fas fa-heart"></i>
        <p>Estado</p>
      </div>
      <div class="option2">
        <i class="fas fa-map-marker-alt"></i>
        <p>Estoy aquí</p>
      </div>
    </div>
  </section>
</div>
`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;

  const btnCerrarSesion = divElement.querySelector('#close');
  btnCerrarSesion.addEventListener('click', signOut);

  return divElement;
};
