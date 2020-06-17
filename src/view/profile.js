/* eslint-disable import/no-cycle */
import { signOut } from '../firebase/auth-controller.js';
// import { consultarUsuario } from '../firebase/user-firestore.js';
import { MostrarUsuario } from '../view-controller/view-profile.js';
import { changeView } from '../view-controller/router.js';

export default () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      MostrarUsuario(user.email);
      console.log('hi')
    }
  });
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
      <section class="post_public">
        <div class="title_user title_user_public">
          <div class = "menu_edit_post">
          <i class="fas fa-ellipsis-h"></i>
          </div>
          <figure class="data_user">
            <div class="img_user" id="img_user">
            </div>
            <div class="name_user">
              <div class="name_date_post">
                <h2 class ="name">EJEMPLO RAMIREZ </h2>
                <h3 class ="date">DATE</h3>
              </div>
              <div class="icon_privacity_public"><i class="fas fa-globe-americas"></i></div>
            </div>
          </figure>  
        </div>
      <div class="description_post">
        <div class="description_text">
      <p class="content_description_text" >here descripcion</p>
          </div>
      </div>
      <div  class="options_post_public">
        <div class ="space_likes">
          <img class="icon_like" src="../imagenes/logoColorCorte.png">
          <p class = "contador_likes">2</p>
          <p class = "like_text">Me gusta</p>
        </div>
        <div class ="space_comment">
          <img class="icon_comment" src="../imagenes/logoMensaje.png">
          <p class = "contador_comment">12</p>
          <p class = "comment_text">comentarios</p>
        </div>
      </div>
    </section>
    </div>
</div> `;
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
