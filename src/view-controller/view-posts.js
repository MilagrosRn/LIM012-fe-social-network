/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { crearPost, eliminarDocumentoEnPost } from '../firebase/firestore-controller.js';
import { subirAlStorage, eliminarStorage } from '../firebase/storage-controller.js';

const previsualizarImagen = (input, divShowContent) => {
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

const subirImagen = (file, uid, uploader) => {
  const task = subirAlStorage(file, uid);
  task.on('state_changed',
    (snapshot) => {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = percentage;
    },
    (err) => {
      console.log('error imagen', err);
    },
    () => {
      task.snapshot.ref.getDownloadURL().then((url) => {
        localStorage.setItem('imgNewPost', url);
      }).catch((err) => {
        console.error(`Error obteniendo downloadURL = > ${err}`, 4000);
      });
    });
};

const darLike = (user, documento) => firebase.firestore().collection('posts').doc(documento.id).update({
  likes: firebase.firestore.FieldValue.arrayUnion(user.uid),
});

const quitarLike = (user, documento) => firebase.firestore().collection('posts').doc(documento.id).update({
  likes: firebase.firestore.FieldValue.arrayRemove(user.uid),
});

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

const crearPostFuncion = (uid, nameUser, gmail, imageProfile, description, privacity, imagenLink, imagenName) => {
  const fatherText = document.querySelector('.text_post');
  const divImage = document.querySelector('.option_image_public');
  crearPost(uid, nameUser, gmail, imageProfile, description, privacity, imagenLink, imagenName)
    .then(() => {
      fatherText.value = '';
      divImage.style.display = 'none';
      localStorage.removeItem('imgNewPost');
    }).catch(error => console.log('error con post', error));
};


const verificarLikeUsuario = (user, documento) => {
  const arrLikes = documento.data().likes;
  const found = arrLikes.includes(user.uid);
  if (found === false) {
    darLike(user, documento);
  } else {
    quitarLike(user, documento);
  }
};

const eliminarPost = (doc) => {
  const documento = doc.id;
  eliminarDocumentoEnPost(documento)
    .then(() => {
      console.log('Document successfully deleted!');
      if (doc.data().imagenLink !== null) {
        const uid = doc.data().uid;
        const file = doc.data().imagenName;
        eliminarStorage(uid, file)
          .then(() => {
            console.log('se borro de storage');
          });
      }
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};

export {
  verificarLikeUsuario,
  previsualizarImagen,
  subirImagen,
  mostrarEstado,
  mostrarLocacion,
  crearPostFuncion,
  eliminarPost,
  darLike,
  quitarLike,
};
