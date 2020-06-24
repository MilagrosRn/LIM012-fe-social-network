import createPostTemplate from './createPost.js';

export default function vistaUsuario(doc) {
  const divUser = `
  <div class="containerUserHome">
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
    </div>
  </div>
  <section class="post"></section>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = divUser;

  const post = divElement.querySelector('.post');
  post.appendChild(createPostTemplate(doc));

  return divElement;
}
