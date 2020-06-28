import { eliminarComentario, modificarComentario } from '../firebase/firestore-controller.js';
// import { quitarComentario } from '../view-controller/view-comentario.js';

export default function crearComentarioTemplate(doc) {
  const divComentario = `
  <section class="comentario crearComentario">
    <div class="title_user title_user_public">
      <div class = "menu_edit_Comentario">
        <div class="divBtnEliminarComent"><span class="btnBorrarPost">🗑</span></div>
        <div class="divBtnEditarComent"><span class="btnEditPost">✏</span></div>
      </div>
      <div class="titleComentario">
        <div class="img_user" id="img_user">
          <img src ="${doc.imageAutor}" class="image_current_user">
        </div>
        <div class="nombreUsuario"><h2 class ="nombreCometario">${doc.autor}</h2></div>
      </div>      
    </div>
    <div class="description_comentario">
      <p class="content_description_text" >${doc.contenido}</p>
    </div>
  </section>
  <section class="editarComentario crearComentario">
    <div class="titleComentario">
      <div class="img_user" id="img_user">
        <img src ="${doc.imageAutor}" class="image_current_user">
      </div>
      <div class="nombreUsuario"><h2 class ="nombreCometario">${doc.autor}</h2></div>
    </div>
    <div class="description_comentario">
      <input type="text" class="textEditarComentario text_comentario" value="${doc.contenido}">
      <div class="GuardarComent"><i class="fas fa-angle-double-right"></i></div>
    </div>
  </section>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = divComentario;

  const menuEditComentario = divElement.querySelector('.menu_edit_Comentario');
  const user = firebase.auth().currentUser;
  if (user.email === doc.gmail) {
    menuEditComentario.style.display = 'block';
  } else {
    menuEditComentario.style.display = 'none';
  }

  const editarComentario = divElement.querySelector('.editarComentario');
  editarComentario.style.display = 'none';
  const comentario = divElement.querySelector('.comentario');

  const divBtnEliminarComent = divElement.querySelector('.divBtnEliminarComent');
  divBtnEliminarComent.addEventListener('click', () => {
    eliminarComentario(doc.id);
    // quitarComentario(idPost, doc.id);
  });

  const divBtnEditarComent = divElement.querySelector('.divBtnEditarComent');
  divBtnEditarComent.addEventListener('click', () => {
    editarComentario.style.display = 'block';
    comentario.style.display = 'none';
  });

  const textEditarComentario = divElement.querySelector('.textEditarComentario');
  const GuardarComent = divElement.querySelector('.GuardarComent');
  GuardarComent.addEventListener('click', () => {
    modificarComentario(doc.id, textEditarComentario.value);
    editarComentario.style.display = 'none';
    comentario.style.display = 'block';
  });

  return divElement;
}
