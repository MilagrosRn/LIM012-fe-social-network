// eslint-disable-next-line import/no-cycle
import {
  previsualizarImagen,
  subirImagen,
  mostrarEstado,
  mostrarLocacion,
  crearPostFuncion,
} from '../view-controller/view-posts.js';

export default function crearPostTemplate(doc) {
  const user = firebase.auth().currentUser;
  const divPost = `
  <section id="post_init">
  <div class="title_user">
    <figure class="data_user">
      <div class="img_user" id="img_user">
        <img  class="image_current_user"src="${doc.image_profile}">
      </div>
      <div class="name_user">
        <div class="name_date_post">
          <h2 class ="name">${doc.name_user}</h2>
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
    <progress value="0" max="100" id="uploader">0%</progress>
    <input type="file" id="fileInput">
    <div id="fileDisplayArea"></div>
  </div>
  <div class="options_post">
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
  </div>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = divPost;

  const btnPrivacidadPriv = divElement.querySelector('.fa-lock');
  const btnPrivacidadPublic = divElement.querySelector('.fa-globe-americas');
  const btnPublicarFoto = divElement.querySelector('.photo_post');
  const btnPublicarEstado = divElement.querySelector('.state_post');
  const btnPublicarUbicacion = divElement.querySelector('.location_post');
  const btnCrearPost = divElement.querySelector('.button_send');
  const divState = divElement.querySelector('.option_state_public');
  const fatherText = divElement.querySelector('.text_post');

  // opciones privacidad
  let privacityMarked = '';
  btnPrivacidadPriv.addEventListener('click', () => {
    privacityMarked = false;
  });
  btnPrivacidadPublic.addEventListener('click', () => {
    privacityMarked = true;
  });

  // opcion publicar una imagen
  const nombreImagen = {};
  btnPublicarFoto.addEventListener('click', () => {
    const divImage = divElement.querySelector('.option_image_public');
    divImage.style.display = 'block';

    const fileInput = divElement.querySelector('#fileInput');
    const fileDisplayArea = divElement.querySelector('#fileDisplayArea');

    fileInput.addEventListener('change', () => {
      previsualizarImagen(fileInput, fileDisplayArea);
    });
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      const fileName = file.name;
      nombreImagen.nombre = fileName;
      const barraProgreso = document.getElementById('uploader');
      subirImagen(file, user.uid, barraProgreso);
    });
  });

  //  opcion plantilla estado y ubicacion
  btnPublicarEstado.addEventListener('click', () => {
    mostrarEstado(divState, fatherText);
  });
  btnPublicarUbicacion.addEventListener('click', () => {
    mostrarLocacion(divState, fatherText);
  });

  // opcion crear un post
  btnCrearPost.addEventListener('click', (() => {
    const description = divElement.querySelector('.text_post').value;
    const privacityCollection = privacityMarked === true;
    // comprueba que este autenticado el usuario antes de un
    if (user === null) {
      console.log('no autenticado para post');
    }
    const imagenLink = sessionStorage.getItem('imgNewPost') === 'null'
      ? null
      : localStorage.getItem('imgNewPost');
    crearPostFuncion(user.uid, doc.name_user, user.email, doc.image_profile, description, privacityCollection, imagenLink, nombreImagen);
  }));
  return divElement;
}
