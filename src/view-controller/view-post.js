

// plantilla publicar un post

export const postTemplate = (doc) => {
  const divPostPublicado = `
  <section class="post_public">
        <div class="title_user title_user_public">
          <div class = "menu_edit_post">
           <i class="fas fa-ellipsis-h"></i>
          </div>
          <figure class="data_user">
            <div class="img_user" id="img_user">
            </div>
            <div class="name_user">
              <div class="name_date_post">
                <h2 class ="name">${doc.data().autor}</h2>
                <h3 class ="date">${doc.data().date}</h3>
              </div>
              <div class="icon_privacity_public">
              </div>
            </div>
          </figure>  
         </div>
      <div class="description_post">
        <div class="description_text">
       <p class="content_description_text" >${doc.data().description}</p>
          </div>
      </div>
      <div  class="options_post_public">
        <div class ="space_likes">
          <img class="icon_like" src="../imagenes/logoColorCorte.png">
          <p class = "contador_likes">${doc.data().likes}</p>
          <p class = "like_text">Me gusta</p>
        </div>
        <div class ="space_comment">
          <img class="icon_comment" src="../imagenes/logoMensaje.png">
          <p class = "contador_comment">12</p>
          <p class = "comment_text">comentarios</p>
        </div>
      </div>
    </section>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = divPostPublicado;
  const divPrivacity = divElement.querySelector('.icon_privacity_public');
  const iconPubic = '<i class="fas fa-globe-americas"></i>';
  const iconPriv = '<i class="fas fas fa-lock"></i>';
  if (doc.data().privacity === true) {
    divPrivacity.innerHTML = iconPubic;
  } else {
    divPrivacity.innerHTML = iconPriv;
  }
  return divPostPublicado;
};
