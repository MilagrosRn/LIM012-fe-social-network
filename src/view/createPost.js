// eslint-disable-next-line import/no-cycle
import { loadImage, updateImagePost } from '../view-controller/view-posts.js';
import { createPost } from '../firebase/firestore-controller.js';

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
  </div>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = divPost;

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

    const fileInput = divElement.getElementById('fileInput');
    const fileDisplayArea = divElement.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', () => {
      loadImage(fileInput, fileDisplayArea);
    });
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      console.log(file);
      updateImagePost(file, user.uid);
    });
  });

  const divState = divElement.querySelector('.option_state_public');
  const fatherText = divElement.querySelector('.text_post');
  //  option plantilla estado y ubicacion
  btnPublicState.addEventListener('click', () => {
    divState.textContent = '';
    const textState = 'Me siento...';
    divState.textContent = textState;
    fatherText.setAttribute('value', divState.textContent);
  });
  btnPublicLocation.addEventListener('click', () => {
    divState.textContent = '';
    divState.textContent = 'Estoy en...';
    fatherText.setAttribute('value', divState.textContent);
  });

  // crear un post
  btnCrearPost.addEventListener('click', (() => {
    // const nameUser = divElement.querySelector('.name');
    // const divName = divElement.createElement('p');
    // nameUser.appendChild(divName);
    const description = divElement.querySelector('.text_post').value;
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
    const imagenLink = sessionStorage.getItem('imgNewPost') === 'null'
      ? null
      : localStorage.getItem('imgNewPost');

    // eslint-disable-next-line max-len
    createPost(user.uid, doc.name_user, user.email, doc.image_profile, description, privacityCollection, imagenLink)
      .then(() => {
        fatherText.value = '';
        const divImage = divElement.querySelector('.option_image_public');
        divImage.style.display = 'none';
      }).catch(error => console.log('error con post', error));
  }));

  return divElement;
}
