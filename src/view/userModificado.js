/* eslint-disable max-len */
// eslint-disable-next-line import/no-cycle
import { createPost, loadImage, updateImagePost } from '../model/posts.js';

export default (doc) => {
  const user = firebase.auth().currentUser;
  const divUser = `
    <div class="contenedorUser">
      <div class="divtop">
          <img src="${doc.image_port}" class="imagePortada">
          <center><img src="${doc.image_profile}" class="imagePerfile"></center>
          <center><p class="titulos">${doc.name_user}</p></center>
      </div>
      <div class="divbottom">
          <div class="divTitleLogo">
              <div><p class="titulos">Detalles</p></div>
          </div>
          <div class="divPEditar">fa-lock
              <center><p class="editUser">${doc.ocupation}</p></center>
              <center><p class="editUser">${doc.location}</p></center>
              <center><p class="editUser">${doc.lenguaje}</p></center>
          </div>
          <div class="divInputEdit">
              <center><input type="text" class="editUser input_ocupation" value="${doc.ocupation}">
              <input type="text" class="editUser input_location" value="${doc.location}">
              <input type="text" class="editUser input_lenguaje" value="${doc.lenguaje}">
          </div>
      </div>
    </div>
    <section class="post">
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
            <div style = "green" class=".progress_graphic" style="width: 0%"></div>
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
          </div>
        </section>
      </section>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = divUser;

  const btnPrivacityPriv = divElement.querySelector('.fa-lock');
  const btnPrivacityPublic = divElement.querySelector('.fa-globe-americas');
  const btnCrearPost = divElement.querySelector('.button_send');
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

  // const files = [];
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
      const file = e.target.files[0];
      // file.push(files);
      console.log(file);
      updateImagePost(file, user.uid);
    });
  });


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
    const likes = [];

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
    const imagenLink = localStorage.getItem('imgNewPost') === 'null'
      ? null
      : sessionStorage.getItem('imgNewPost');

    createPost(user.uid, doc.name_user, user.email, doc.image_profile, description, privacityCollection, imagenLink, likes)
      .then(() => {
        const fatherText = divElement.querySelector('.text_post');
        fatherText.value = '';
        const divImage = divElement.querySelector('.option_image_public');
        divImage.style.display = 'none';
        console.log('post creado correcto');
      }).catch(error => console.log('error con post', error));
  }));

  return divElement;
};
