/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import {
  crearPost, subirAlStorage, darLike, quitarLike,
} from '../firebase/firestore-controller.js';

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

const mostrarLikesUsuarios = (user) => {
  console.log(user);
  let divUsuario = '';
  divUsuario += `
            <div class = "input">
              <img class="img-usuario-list" src="${user.profile}" >
              <h1 class="name-user-list">${user.name}</h1>
            </div>`;
  //         });
  //     }
  const div = document.createElement('div');
  div.innerHTML = divUsuario;
  return div;
};

const verificarLikeUsuario = (user, documento) => {
  const arrLikes = documento.data().likes;
  const found = arrLikes.includes(user.uid);
  if (found === false) {
    darLike(user, documento);
    // const div = mostrarLikesUsuarios(user);
    // contenido.appendChild(div);
  } else {
    quitarLike(user, documento);
  }
  return {
    profile: user.photoURL,
    name: user.displayName,
  };
};

export {
  verificarLikeUsuario,
  mostrarLikesUsuarios,
  previsualizarImagen,
  subirImagen,
  mostrarEstado,
  mostrarLocacion,
  crearPostFuncion,
};
