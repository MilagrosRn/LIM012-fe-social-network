
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

// <img src ="${doc.data().imageProfile}"class="img_user_post">
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
            <img src ="${doc.data().imageProfile}"class="image_current_user">
            </div>
            <div class="name_user">
              <div class="name_date_post">
                <h2 class ="name">${doc.data().autor}</h2>
                <h3 class ="date">${Utilidad.obtenerFecha(doc.data().date.toDate())}</h3>
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
  // const user = firebase.auth().currentUser;
  // console.log(user);
  // if (user.photoURL) {
  //   const imagenUser = divElement.querySelector('.img_user_post');
  //   imagenUser.src=user.photoURL;
  // } else {
  //   const imagenUser = divElement.querySelector('.img_user_post');
  //   imagenUser.src ='degradado.png';
  // }
  // const textStateOption = document.querySelector('.option_state_public');
  // // Creamos el nuevo párrafo
  // eslint-disable-next-line max-len
  // var nuevo_parrafo = document.createElement('p').appendChild(document.createTextNode('Nuevo párrafo.'));

  // // Recojemos en una variable el segundo párrafo
  // var descriptionElement= document.getElementById('padre').getElementsByTagName('p')[1];

  // // Y ahora lo insertamos
  // document.getElementById('padre').insertBefore(nuevo_parrafo,segundo_p);


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
