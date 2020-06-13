/* eslint-disable import/no-cycle */
import { signOut } from '../firebase/auth-controller.js';
import {
  createPost, questionPost, loadImage, updateImagePost,
} from '../model/posts.js';
import { changeView } from '../view-controller/router.js';

export default () => {
  // usuario logeado actualmente
  const user = firebase.auth().currentUser;

  let image = 'https://i1.wp.com/unimooc.com/wp-content/uploads/2015/04/corazon-comida-sana.jpg';
  if (user.photoURL) {
    image = user.photoURL;
  }
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
              <div class="img_user" id="img_user">
              <img  class="image_current_user"src="${image}">
              </div>
              <div class="name_user">
                   <div class="name_date_post">
                    <h2 class ="name">${user.displayName}</h2>
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
              <h2 class ="option_state_public" style="display:none"></h2>
            
            <input type="text"  class="text_post" placeholder="¿Que estas pensando?">
                <div class="button_send"><i class="fas fa-paper-plane"></i></div>
              </div>
            </div>
            <div class ="option_image_public" style="display:none">
            Select an image file: 
            <hr style = "color :red"class="progress_graphic">
            <input type="file" id="fileInput">
            <div id="fileDisplayArea"></div>
            </div>
            <div  class="options_post">
              <div class="option photo_post">
                <i class="fas fa-camera"></i>
                <p>Foto</p>
              </div>
              <div class="option state_post">
                <i class="fas fa-heart"></i>
                <p>Estado</p>
              </div>
              <div class="option2 location_post">
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
  const btnPrivacityPriv = divElement.querySelector('.fa-lock');
  const btnPrivacityPublic = divElement.querySelector('.fa-globe-americas');
  // menu hamburguesa
  btninicio.addEventListener('click', (() => {
    changeView('#/home');
  }));

  btnprofile.addEventListener('click', () => {
    changeView('#/profile');
  });

  btnCerrarSesion.addEventListener('click', signOut);
  // opciones privacidad
  let privacityMarked = '';
  btnPrivacityPriv.addEventListener('click', () => {
    privacityMarked = false;
  });
  btnPrivacityPublic.addEventListener('click', () => {
    privacityMarked = true;
  });
  // option publicar una imagen
  const btnPublicPhoto = divElement.querySelector('.photo_post');
  const btnPublicState = divElement.querySelector('.state_post');
  const btnPublicLocation = divElement.querySelector('.location_post');
  // img


  // let files ='';
  btnPublicPhoto.addEventListener('click', () => {
    const divImage = divElement.querySelector('.option_image_public');
    divImage.style.display = 'block';

    const fileInput = document.getElementById('fileInput');
    const fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', () => {
      loadImage(fileInput, fileDisplayArea);
    });
    fileInput.addEventListener('change', (e) => {
    //  if (fileInput !== '') {

      const file = e.target.files[1];
      // file = files;
      console.log(file);
      updateImagePost(file, user.uid);

    });
  });
  const imagenLink = sessionStorage.getItem('imgNewPost') === 'null'
    ? null
    : sessionStorage.getItem('imgNewPost');
  //  option plantilla estado y ubicacion
  btnPublicState.addEventListener('click', () => {
    const divState = divElement.querySelector('.option_state_public');
    divState.textContent = '';
    const textState = 'Me siento...';
    divState.textContent = textState;
    const fatherText = divElement.querySelector('.text_post');
    fatherText.setAttribute('value', divState.textContent);
  });
  btnPublicLocation.addEventListener('click', () => {
    const divState = divElement.querySelector('.option_state_public');
    divState.textContent = '';
    divState.textContent = 'Estoy en...';
    const fatherText = divElement.querySelector('.text_post');
    fatherText.setAttribute('value', divState.textContent);
  });

  // crear un post
  btnCrearPost.addEventListener('click', (() => {
    const nameUser = divElement.querySelector('.name');
    const divName = document.createElement('p');
    nameUser.appendChild(divName);
    const description = divElement.querySelector('.text_post').value;
    const likes = 0;


    let privacityCollection = '';
    if (privacityMarked) {
      privacityCollection = true;
    } else {
      privacityCollection = false;
    }
    // comprueba que este autenticado el usuario antes de un post
    if (user === null) {
      console.log('no autenticado para post');
    }
    createPost(user.uid, user.displayName, user.email, image, description, privacityCollection, likes, imagenLink)
      .then(res => console.log('post creado correcto'))
      .catch(error => console.log('error con post'));
  }));

  return divElement;
};
