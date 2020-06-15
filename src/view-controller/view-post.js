
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
// //publicar una foto
// const photoPostTemplate= ()=>{

// }


// plantilla publicar un post
export const postTemplate = (doc) => {
  const divPostPublicado = `
  <section class="post_public">
        <div class="title_user title_user_public">
         <button class="menu_burger">
         <i class="fas fa-ellipsis-h"></i>
         </button>
          <nav class="menu_select" id="hidden-menu">
          <ul class="menu_select_ul " >
            <li class="menu_edit">Editar</li>
            <li class="menu_delete">Eliminar</li>
          </ul>
          </nav>
          
          
          <figure class="data_user">
            <div class="img_user" id="img_user">
            <img src ="${doc.data().img_autor_post}"class="img_user_post">
            </div>
            <div class="name_user">
              <div class="name_date_post">
                <h2 class ="name">${doc.data().autor}</h2>
                <h3 class ="date">${Utilidad.obtenerFecha(doc.data().date.toDate())}</h3>
              </div>
              <div class="icon_privacity_public">
              <div id= "icon">
                
                <i class="fas fa-globe-americas"></i>
              </div>
              <select name="option_priv_Public">
                <option>Publico</option>
                <option>Privado</option>
              </select> 
              </div>
            </div>
          </figure>  
         </div>
      <div class="description_post_Public">
        <div class="description_text_Public">
       <p class="content_description_text" >${doc.data().description}</p>
       <br>
       
          </div>
          <div class = "div_image" >
         <img class="imgPublic"src="${doc.data().imagenLink}">
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
  const btnmenuedit = divElement.querySelector('.menu_burger');
  const showEdit = () => {
    console.log('menu');
  };
  btnmenuedit.addEventListener('click', showEdit());

  // const divPrivacity = divPostPublicado.querySelectorAll('.icon');
  // // divPrivacity.innerHTML = '';
  // divPrivacity.innerHTML = '<p>hola</p>';
  // const iconPubic = '<i class="fas fa-globe-americas"></i>';
  // const iconPriv = '<i class="fas fas fa-lock"></i>';
  // if (doc.data().privacity === true) {
  //   divPrivacity.innerHTML = iconPubic;
  // } else {
  //   divPrivacity.innerHTML = iconPriv;
  // }
  return divPostPublicado;
};
