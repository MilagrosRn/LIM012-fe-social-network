import createPostTemplate from './createPost.js';

export default (doc) => {
  const divUser = `
  <div class="containerUser usuarioHome">
    <div class="divtop">
      <img src="${doc.image_port}" class="imagePortada">
      <center><img src="${doc.image_profile}" class="imagePerfile"></center>
      <center><p class="titulos">${doc.name_user}</p></center>
    </div>
    <div class="divbottom">
      <div class="divTitleLogo">
        <div><p class="titulos">Detalles</p></div>
      </div>
      <div class="divPEditar">
        <center><p class="editUser">${doc.ocupation}</p></center>
        <center><p class="editUser">${doc.location}</p></center>
        <center><p class="editUser">${doc.lenguaje}</p></center>
      </div>
      <div class="divInputEdit">
        <center><input type="text" class="editUser input_ocupation" value="${doc.ocupation}">
        <input type="text" class="editUser input_location" value="${doc.location}">
        <input type="text" class="editUser input_lenguaje" value="${doc.lenguaje}">
      </div>
      <div><input type="button" class="botonGuardarUserEdit" value="Guardar"></div>
    </div>
  </div>
  <section class="post"></section>`;
  const divElement = document.createElement('div');
  divElement.className = 'contenedorUserProfile';
  divElement.innerHTML = divUser;

  const post = divElement.querySelector('.post');
  post.appendChild(createPostTemplate(doc));

  return divElement;
};
