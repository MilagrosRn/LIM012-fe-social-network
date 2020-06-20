/* eslint-disable no-unreachable */
// eslint-disable-next-line import/no-cycle
import views from '../view/index.js';
import mostrarCabecera from '../view/header.js';

const llamarCabecera = (contenedor) => {
  contenedor.appendChild(mostrarCabecera());
};


const changeView = (hashUrl) => {
  window.location.hash = hashUrl;
  const seccion = document.getElementById('seccion');
  seccion.innerHTML = '';
  switch (hashUrl) {
    case '':
    case ' ':
    case '#':
    case '#/':
    case '#/login': return seccion.appendChild(views.login());
    case '#/register': return seccion.appendChild(views.register());
    case '#/home': return seccion.appendChild(views.home(llamarCabecera));
    case '#/profile': return seccion.appendChild(views.profile(llamarCabecera));
    case '#/conditions': return seccion.appendChild(views.conditions());
    default: return seccion.appendChild(views.notFound());
  }
};
export { changeView };
