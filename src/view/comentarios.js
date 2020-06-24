export default function crearComentarioTemplate(doc) {
  const divComentario = `
  <section class="comentario">
    <div class="title_user title_user_public">
      <div class = "menu_edit_post">
        <div class="divBtnEliminarComent"><span class="btnBorrarPost">🗑</span></div>
        <div class="divBtnEditarComent"><span class="btnEditPost">✏</span></div>
      </div>
    </div>
    <div class="titleComentario">
      <h2 class ="nombreCometario">${doc.nombre}</h2>
    </div>
    <div class="description_comentario">
      <p class="content_description_text" >${doc}</p>
    </div>
  </section>
  <section class="editarComentario">
    <div class="titleComentario">
      <h2 class ="nombreCometario">${doc.nombre}</h2>
    </div>
    <div class="description_comentario">
      <input type="text" class="text_comentario" value="${doc}">
      <div class="GuardarComent"><i class="fas fa-angle-double-right"></i></div>
    </div>
</section>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = divComentario;

  const divBtnEliminarComen = divElement.querySelector('divBtnEliminarComen');
  divBtnEliminarComen.addEventListener('click', () => {
    eliminarComentario(doc.id);
  });
  const divBtnEditarComent = divElement.querySelector('divBtnEditarComent');
  divBtnEditarComent.addEventListener('click', () => {
    const user = firebase.auth().currentUser;
    crearComentario2(user.email, doc.id, _autor, _contenido);
  });

  return divElement;
}
