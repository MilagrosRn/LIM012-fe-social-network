// eslint-disable-next-line import/no-cycle
import { mostrarEditarUser, GuardarModificadoUser } from '../view-controller/view-user.js';
import crearPostTemplate from './createPost.js';

export default (doc) => {
  const divUser = `
  <div class="containerUser">
    <div class="divtop">
      <img src="${doc.image_port}" class="imagePortada">
      <center><img src="${doc.image_profile}" class="imagePerfile"></center>
      <center><p class="titulos">${doc.name_user}</p></center>
    </div>
    <div class="divbottom">
      <div class="divTitleLogo">
        <div><p class="titulos">Detalles</p></div>
        <div class="divBtnEditUser"><span class="btnEditUser"><img class="logo_editarUSer" src="https://image.flaticon.com/icons/png/512/61/61456.png"></span></div>
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
  divElement.innerHTML = divUser;


  const btnEditUser = divElement.querySelector('.btnEditUser');
  btnEditUser.addEventListener('click', mostrarEditarUser);

  const botonGuardarUserEdit = divElement.querySelector('.botonGuardarUserEdit');
  botonGuardarUserEdit.addEventListener('click', () => {
    const inputOcupation = document.querySelector('.input_ocupation').value;
    const inputLocation = document.querySelector('.input_location').value;
    const inputLenguaje = document.querySelector('.input_lenguaje').value;
    GuardarModificadoUser(doc.gmail, inputOcupation, inputLocation, inputLenguaje);
  });

  const post = divElement.querySelector('.post');
  post.appendChild(crearPostTemplate(doc));

  return divElement;
};
