// eslint-disable-next-line import/no-cycle
import { mostrarEditarUser, GuardarModificadoUser } from '../view-controller/view-user.js';
import createPostTemplate from './createPost.js';

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
        <div class="divBtnEditUser">
          <span class="btnEditUser"><i class="fas fa-edit"></i></span>
        </div>
      </div>
      <div class="divPEditar">
        <center><p class="editUser">${doc.ocupation}</p></center>
        <center><p class="editUser">${doc.location}</p></center>
        <center><p class="editUser">${doc.lenguaje}</p></center>
      </div>
      <div class="divInputEdit">
        <center><p>¿A qué te dedicas?</p><input type="text" class="editUser input_ocupation" value="${doc.ocupation}">
        <p>¿De dónde eres?</p><input type="text" class="editUser input_location" value="${doc.location}">
        <p>¿Hablas algún idioma?</p><input type="text" class="editUser input_lenguaje" value="${doc.lenguaje}">
      </div>
      <div class = "divButtonEdit"><input type="button" class="botonGuardarUserEdit" value="Guardar"></div>
    </div>
  </div>
    <section class="post"></section>`;
  const divElement = document.createElement('div');
  divElement.className = 'contenedorUserProfile';
  divElement.innerHTML = divUser;

  const inputOcupationEdit = divElement.querySelector('.input_ocupation');
  inputOcupationEdit.style.border = '1px solid rgba(0, 0, 0, 0.53)';
  const inputLocationEdit = divElement.querySelector('.input_location');
  inputLocationEdit.style.border = '1px solid rgba(0, 0, 0, 0.53)';
  const inputLenguajeEdit = divElement.querySelector('.input_lenguaje');
  inputLenguajeEdit.style.border = '1px solid rgba(0, 0, 0, 0.53)';

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
  post.appendChild(createPostTemplate(doc));

  return divElement;
};
