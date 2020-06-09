// eslint-disable-next-line import/no-cycle
import { mostrarEditarUser, GuardarModificadoUser } from '../view-controller/view-user.js';

export default (doc) => {
  const divUser = `
    <div class="divtop">
        <img src="${doc.data().image_port}" class="imagePortada">
        <img src="${doc.data().image_profile}" class="imagePerfile">
        <p class="titulos">${doc.data().name_user}</p>
    </div>
    <div class="divbottom">
        <div>
            <p class="titulos">Detalles</p>
            <span class="btnEditUser"><img class="logo_editarUSer" src="https://image.flaticon.com/icons/png/512/61/61456.png"></span>
        </div>
        <div class="divPEditar">
            <p class="editUser">${doc.data().ocupation}</p>
            <p class="editUser">${doc.data().location}</p>
            <p class="editUser">${doc.data().lenguaje}</p>
        </div>
        <div class="divInputEdit">
            <input type="text" class="editUser input_ocupation" value="${doc.data().ocupation}">
            <input type="text" class="editUser input_location" value="${doc.data().location}">
            <input type="text" class="editUser input_lenguaje" value="${doc.data().lenguaje}">
        </div>
        <div><input type="button" class="botonGuardarUserEdit" value="Guardar"></div>
    </div>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = divUser;

  const btnEditUser = divElement.querySelector('.btnEditUser');
  btnEditUser.addEventListener('click', mostrarEditarUser);

  const botonGuardarUserEdit = divElement.querySelector('.botonGuardarUserEdit');
  botonGuardarUserEdit.addEventListener('click', () => {
    const inputOcupation = document.querySelector('.input_ocupation').value;
    const inputLocation = document.querySelector('.input_location').value;
    const inputLenguaje = document.querySelector('.input_lenguaje').value;
    GuardarModificadoUser(doc.data().gmail, inputOcupation, inputLocation, inputLenguaje);
  });

  return divElement;
};
