/* eslint-disable no-unreachable */
// eslint-disable-next-line import/no-cycle
import views from '../view/index.js';
import { getPosts, getUsers } from '../firebase/firestore-controller.js';
import { traerDataPost, traerDataUsuario, llamarCabecera } from './view-home.js';

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
    case '#/home': {
      getPosts(traerDataPost);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          getUsers(user.email, traerDataUsuario);
        }
      });
      // return seccion.appendChild(views.home(llamarCabecera));
      break;
    }
    case '#/profile': return seccion.appendChild(views.profile(llamarCabecera));
    case '#/conditions': return seccion.appendChild(views.conditions());
    default: return seccion.appendChild(views.notFound());
  }
};
export { changeView };
