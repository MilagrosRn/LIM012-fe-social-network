// eslint-disable-next-line import/no-cycle
import { eliminarPost, modificarPost } from '../firebase/firestore-controller.js';
import { crearComentario2 } from '../view-controller/view-comentario.js';

// fecha en el post
class Utilidad {
  static obtenerFecha(timeStamp) {
    // El cambio es llamar al atributo seconds
    const d = new Date(timeStamp);
    const local = new Date();
    let month = `${d.getMonth() + 1}`;
    // Gets the day-of-the-month
    let day = `${d.getDate()}`;
    const year = d.getFullYear();
    const hour = d.getHours();
    const minutes = d.getMinutes();
    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;

    // cuanto transcurrio desde la fecha hasta fecha actual en dias
    const diferenceDays = local.getDate() - day;

    // convertir horas a minutos de post y local
    const horaactualHHMM = (local.getHours() * 60) + (local.getMinutes());
    const horapostHHMM = (d.getHours() * 60) + (d.getMinutes());
    const diferenceHHMM = horaactualHHMM - horapostHHMM;

    // determinar con restas la fecha hasta la fecha actual
    let timePublicate = '';
    if (diferenceHHMM > 59) {
      timePublicate = 'today';
    } else if (diferenceDays === 0) {
      timePublicate = 'today-recent';
    } else if (diferenceDays === 1) {
      timePublicate = 'yesterday';
    }

    // cuanto transcurrio desde la fecha hasta fecha actual en minutos
    switch (timePublicate) {
      case 'today-recent':
        return `hace ${diferenceHHMM} min`;
      case 'today':
        return `hoy a las ${hour}:${minutes} `;
      case 'yesterday':
        return `ayer a las ${hour}:${minutes}`;
      default:
        return `${[day, month, year].join('/')} a las ${hour}:${minutes}`;
    }
  }
}

export const postTemplate = (doc) => {
  const user = firebase.auth().currentUser;
  let divPostPublicado = `
  <section class="post_public">
    <div class="title_user title_user_public">
      <div class = "menu_edit_post">
        <div class="divBtnEliminarPost"><span class="btnBorrarPost">🗑</span></div>
        <div class="divBtnEditarPost"><span class="btnEditPost">✏</span></div>
      </div> `;
  divPostPublicado += `
        <figure class="data_user">
          <div class="img_user" id="img_user">
            <img src ="${doc.data().imageProfile}"class="image_current_user">
          </div>
          <div class="name_user">
            <div class="name_date_post">
              <h2 class ="name">${doc.data().autor}</h2>
              <h3 class ="date">${Utilidad.obtenerFecha(doc.data().date.toDate())}</h3>
            </div>`;
  if (doc.data().privacity === false) {
    divPostPublicado += '<div class="icon_privacity"><i class="fas fa-lock"></i></div>';
  }
  if (doc.data().privacity === true) {
    divPostPublicado += '<div class="icon_privacity"><i class="fas fa-globe-americas"></i></div>';
  }
  divPostPublicado += `
          </div>
        </figure> 
      </div>
      <div class="description_post">
        <div class="description_text">
          <p class="content_description_text" >${doc.data().description}</p>
        </div>`;
  if (doc.data().imagenLink === undefined || doc.data().imagenLink === null) {
    divPostPublicado += ' ';
  } else {
    divPostPublicado += `
        <div class = "div_image">
          <img class="imgPublic"src="${doc.data().imagenLink}">
        </div>`;
  }
  divPostPublicado += `
      </div>
      <div  class="options_post_public">
        <div class ="space_likes">
          <img class="icon_like" src="../imagenes/logoColorCorte.png">
          <p class = "contador_likes">${doc.data().likes.length}</p>
          <p class = "like_text">Me gusta</p>
        </div>
        <div class ="space_comment">
          <img class="icon_comment" src="../imagenes/logoMensaje.png">
          <p class = "contador_comment">12</p>
          <p class = "comment_text">comentarios</p>
        </div>
      </div>
    </section>
    <section class="editarPost post">
      <section id="post_init">
        <div class="title_user">
          <figure class="data_user">
            <div class="img_user" id="img_user">
              <img  class="image_current_user"src="${doc.data().imageProfile}">
            </div>
            <div class="name_user">
              <div class="name_date_post">
                <h2 class ="name">${doc.data().autor}</h2>
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

            <input type="text"  class="textPost text_post" value="${doc.data().description}">
          </div>
        </div>`;
  if (doc.data().imagenLink === undefined || doc.data().imagenLink === null) {
    divPostPublicado += ' ';
  } else {
    divPostPublicado += `
              <div class = "div_image">
                <img class="imgPublic"src="${doc.data().imagenLink}">
              </div>`;
  }
  divPostPublicado += `<div><input type="button" class="btnGuardarEdicion" value="Guardar Cambios"></div>
      </section>
    </section>`;
  divPostPublicado += `
  <section class="crearComentario">
      <div class="titleComentario">
        <h2 class ="nombreCometario">${user.displayName}</h2>
      </div>
      <div class="description_comentario">
          <input type="text" class="text_comentario" placeholder="Escribe un comentario">
          <div class="GuardarComentario"><i class="fas fa-paper-plane"></i></div>
      </div>
  </section>
  <section class="mostrarComentarios"></section>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = divPostPublicado;

  const crearComentario = divElement.querySelector('.crearComentario');
  crearComentario.style.display = 'none';
  const iconComment = divElement.querySelector('.icon_comment');
  iconComment.addEventListener('click', () => {
    crearComentario.style.display = 'block';
  });

  const GuardarComentario = divElement.querySelector('.GuardarComentario');
  GuardarComentario.addEventListener('click', () => {
    const textComentario = divElement.querySelector('.text_comentario');
    crearComentario2(user.email, doc.id, user.displayName, textComentario.value)
      .then(() => {
        textComentario.value = '';
      }).catch(error => console.log('error con post', error));
  });




  const menuEditPost = divElement.querySelector('.menu_edit_post');
  const editarPost = divElement.querySelector('.editarPost');
  const postPublic = divElement.querySelector('.post_public');

  if (user.email === doc.data().gmail) {
    menuEditPost.style.display = 'block';
    editarPost.style.display = 'none';
  } else {
    menuEditPost.style.display = 'none';
    editarPost.style.display = 'none';
  }

  const btnEditPost = divElement.querySelector('.btnEditPost');
  btnEditPost.addEventListener('click', () => {
    editarPost.style.display = 'block';
    postPublic.style.display = 'none';
  });

  const btnPrivacidadPriv = divElement.querySelector('.fa-lock');
  const btnPrivacidadPublic = divElement.querySelector('.fa-globe-americas');
  // opciones privacidad
  let privacityMarked = '';
  btnPrivacidadPriv.addEventListener('click', () => {
    privacityMarked = false;
  });
  btnPrivacidadPublic.addEventListener('click', () => {
    privacityMarked = true;
  });

  const btnGuardarEdicion = divElement.querySelector('.btnGuardarEdicion');
  btnGuardarEdicion.addEventListener('click', () => {
    const description = divElement.querySelector('.textPost').value;
    let privacityCollection = '';
    if (privacityMarked) {
      privacityCollection = true;
    } else {
      privacityCollection = false;
    }
    modificarPost(doc.id, description, privacityCollection);
    editarPost.style.display = 'none';
    postPublic.style.display = 'block';
  });

  const btnBorrarPost = divElement.querySelector('.btnBorrarPost');
  btnBorrarPost.addEventListener('click', () => {
    eliminarPost(doc);
  });
  return divElement;
};
