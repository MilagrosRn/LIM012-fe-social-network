/* eslint-disable import/no-cycle */
import { signOut } from '../firebase/auth-controller.js';
import { createPost, questionPost } from '../model/posts.js';
import { changeView } from '../view-controller/router.js';

export default () => {
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
    <section class="post">
        <section id="post_init">
          <div class="title_user">
            <figure class="data_user">
              <div class="img_user" id="img_user"></div>
              <div class="name_user">
                   <div class="name_date_post">
                    <h2 class ="name">PELUCHA REYNA</h2>
                    <h3 class ="date">hace dos minutos</h3>
                  </div>
              </div>
              </figure>   
              <div class="menu_privacity_user">
                <div class="icon_privacity"><i class="fas fa-lock"></i></div>
                <div class="icon_privacity"><i class="fas fa-globe-americas"></i></div>
              </div>
          </div>
          <div class="description_post">
            <div class="description_text">
            <input type="text" class="text_post" value ="¿Qué estas pensando?">
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
  </section>
  <section class="space_post">
  </section>
</div>
`;
  questionPost();
  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;

  const btnCrearPost = divElement.querySelector('.button_send');

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


  btnCrearPost.addEventListener('click', (() => {
    const nameUser = divElement.querySelector('.name');
    const divName = document.createElement('p');
    nameUser.appendChild(divName);
    // usuario logeado actualmente
    const user = firebase.auth().currentUser;
    const description = divElement.querySelector('.text_post').value;
    const likes = 0;
    const privacity = true;
    nameUser.innerHTML = user.currentUser.displayName;
    // comprueba que este autenticado el usuario antes de un post
    if (user === null) {
      console.log('no autenticado para post');
    }
    createPost(user.uid, user.email, description, privacity, likes)
      .then(res => console.log('post creado correcto'))
      .catch(error => console.log('error con post'));
  }));

  return divElement;
};
