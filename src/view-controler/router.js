// eslint-disable-next-line import/no-cycle
import views from '../view/index.js';
// eslint-disable-next-line import/no-cycle
import _login from '../view/loginIn.js';

// eslint-disable-next-line no-undef
export const changeView = (hashUrl) => {
  window.location.hash = hashUrl;
  const seccion = document.getElementById('seccion');
  seccion.innerHTML = '';
  // let vistaSeleccion = ' ';
  switch (hashUrl) {
    case '#/login':
    case '':
    case ' ':
    case '#':
    { return seccion.appendChild(_login()); }
    case '#/register':
    { return seccion.appendChild(views.register()); }
    case '#/home':
    { return seccion.appendChild(views.home()); }
    default:
      return seccion.appendChild(views.notFound());
  }
};
// export default { changeView };
