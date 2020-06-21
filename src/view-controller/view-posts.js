/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { createPost } from '../firebase/firestore-controller.js';

// CARGAR UNA IMAGEN AL POST
const loadImage = (input, divShowContent) => {
  const file = input.files[0];
  const imageType = /image.*/;

  if (file.type.match(imageType)) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      divShowContent.innerHTML = '';
      const img = new Image();
      img.src = reader.result;
      divShowContent.appendChild(img);
    });
    reader.readAsDataURL(file);
  } else {
    divShowContent.innerHTML = 'El archivo debe ser una imagen';
  }
};

// ENVIAR UNA IMAGEN A LA COLECCION
// referenciando la ruta de carpeta para cada usuario
const updateImagePost = (file, uid) => {
  const refStorage = firebase.storage().ref(`imagesUsers/${uid}/${file.name}`);
  // sube archivo
  const task = refStorage.put(file);
  // informa el estado de subida de archivo
  task.on('state_changed',
    (snapshot) => {
      console.log(snapshot);
    },
    (err) => {
      console.log('error imagen', err);
    },
    () => {
      // trae la url de descarga de la imagen
      task.snapshot.ref.getDownloadURL().then((url) => {
        console.log(url);
        localStorage.setItem('imgNewPost', url);
      }).catch((err) => {
        console.error(`Error obteniendo downloadURL = > ${err}`, 4000);
      });
    });
};
const mostrarEstado = (divState, fatherText) => {
  divState.textContent = '';
  const textState = 'Me siento...';
  divState.textContent = textState;
  fatherText.setAttribute('value', divState.textContent);
};
const mostrarLocacion = (divState, fatherText) => {
  divState.textContent = '';
  divState.textContent = 'Estoy en...';
  fatherText.setAttribute('value', divState.textContent);
};
const crearPostFuncion = (uid, nameUser, gmail, imageProfile, description, privacity, imagenLink) => {
  const fatherText = document.querySelector('.text_post');
  const divImage = document.querySelector('.option_image_public');
  createPost(uid, nameUser, gmail, imageProfile, description, privacity, imagenLink)
    .then(() => {
      fatherText.value = '';
      divImage.style.display = 'none';
    }).catch(error => console.log('error con post', error));
};

export {
  loadImage,
  updateImagePost,
  mostrarEstado,
  mostrarLocacion,
  crearPostFuncion,
};
