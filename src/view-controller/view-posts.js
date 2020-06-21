/* eslint-disable no-param-reassign */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
// eslint-disable-next-line import/no-cycle
// import { postTemplate } from '../view/post.js';


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


export { loadImage, updateImagePost };
