/* eslint-disable no-param-reassign */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
// eslint-disable-next-line import/no-cycle
import { postTemplate } from '../view-controller/view-post.js';

// import { op } from '../view-controller/view-home.js';
// // formas de agregar el objeto
// localStorage.setItem('Nombre', 'Miguel Antonio');
// localStorage.Apellido = 'Márquez Montoya';
// // llamar el objeto
// const firstName = localStorage.getItem('Nombre');
// const lastName = localStorage.Apellido;
// // // eliminar datos
// // localStorage.removeItem(Apellido);
// // // limpiar todo el objeto
// // localStorage.clear();
// document.getElementById('prueba').innerHTML = (`Hola, mi nombre es ${firstName} ${lastName}`);

const constructorPost = () => {
  const settings = {
    timestampsInSnapshots: true,
  };
  firebase.firestore().settings(settings);
};

// CREAR POST
// si usamos add crea un id

const createPost = (_uid, _nameUser, _gmail, _imageProfile, _description, _privacity, _imagenLink, _likes) =>
  firebase.firestore().collection('posts').add({
    uid: _uid,
    autor: _nameUser,
    gmail: _gmail,
    imageProfile: _imageProfile,
    description: _description,
    likes: _likes,
    privacity: _privacity,
    imagenLink: _imagenLink,
    date: firebase.firestore.FieldValue.serverTimestamp(),
  })
    .then((ref) => {
      console.log(ref.id);
    })
    .catch((error) => {
      console.log(error);
    });

// CONSULTAR UN DATOS DEL POST

const holePostTemplate = () => `
<section class ="vacio_post">
    <img class="logo_vacio_post" src="../imagenes/logoColor.png" >
    <h2>Es momento de publicar un post</h2>
</section>
`;

const questionPost = () => {
  // onSnapshot permite controlar los cambios en tiempo real
  firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot((querySnapshot) => {
    const dataPost = document.querySelector('.space_post');
    dataPost.innerHTML = '';
    if (querySnapshot === '') {
      dataPost.innerHTML = holePostTemplate();
    } else {
      querySnapshot.forEach((postData) => {
        console.log(postData.id);
        dataPost.appendChild(postTemplate(postData));
      });
    }
  });
};

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

const eliminarPost = (documento) => {
  firebase.firestore().collection('posts').doc(documento).delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};

export {
  createPost, questionPost, loadImage, updateImagePost, constructorPost, eliminarPost,
};
