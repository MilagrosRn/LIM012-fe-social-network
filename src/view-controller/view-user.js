// eslint-disable-next-line import/no-cycle
import { modificarUser } from './view-profile.js';

export const mostrarEditarUser = () => {
  const divInputEdit = document.querySelector('.divInputEdit');
  const botonGuardarUserEdit = document.querySelector('.botonGuardarUserEdit');
  const divPEditar = document.querySelector('.divPEditar');

  divInputEdit.style.display = 'block';
  botonGuardarUserEdit.style.display = 'block';
  divPEditar.style.display = 'none';
};
export const GuardarModificadoUser = (email, ocupacion, locacion, lenguaje) => {
  const divInputEdit = document.querySelector('.divInputEdit');
  const botonGuardarUserEdit = document.querySelector('.botonGuardarUserEdit');
  const divPEditar = document.querySelector('.divPEditar');
  modificarUser(email, ocupacion, locacion, lenguaje);
  divInputEdit.style.display = 'none';
  botonGuardarUserEdit.style.display = 'none';
  divPEditar.style.display = 'block';
};
