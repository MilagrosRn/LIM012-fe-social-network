import {
  eliminarComentario,
  modificarComentario,
} from '../firebase/firestore-controller.js';

export default function crearComentarioTemplate(doc) {
  console.log(doc.id);
  console.log(doc);
  const divComentario = `
  <section class="comentario">
    <div class="title_user title_user_public">
      <div class = "menu_edit_post">
        <div class="divBtnEliminarComent"><span class="btnBorrarPost">🗑</span></div>
        <div class="divBtnEditarComent"><span class="btnEditPost">✏</span></div>
      </div>
    </div>
    <div class="titleComentario">
      <h2 class ="nombreCometario">${doc.autor}</h2>
    </div>
    <div class="description_comentario">
      <p class="content_description_text" >${doc.contenido}</p>
    </div>
  </section>
  <section class="editarComentario">
    <div class="titleComentario">
      <h2 class ="nombreCometario">${doc.autor}</h2>
    </div>
    <div class="description_comentario">
      <input type="text" class="textEditarComentario" value="${doc.contenido}">
      <div class="GuardarComent"><i class="fas fa-angle-double-right"></i></div>
    </div>
</section>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = divComentario;

  const divBtnEliminarComent = divElement.querySelector('.divBtnEliminarComent');
  divBtnEliminarComent.addEventListener('click', () => {
    eliminarComentario(doc.id);
  });
  const divBtnEditarComent = divElement.querySelector('.divBtnEditarComent');
  const textEditarComentario = divElement.querySelector('.textEditarComentario');
  divBtnEditarComent.addEventListener('click', () => {
    modificarComentario(doc.id, textEditarComentario.value);
  });

  return divElement;
}
