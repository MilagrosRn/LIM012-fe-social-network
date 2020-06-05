/* eslint-disable no-unreachable */
// eslint-disable-next-line import/no-cycle
import views from '../view/index.js';

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
    case '#/home': return seccion.appendChild(views.home());
    default: return seccion.appendChild(views.notFound());
  }
};
export { changeView };
