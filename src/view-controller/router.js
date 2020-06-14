/* eslint-disable no-unreachable */
// eslint-disable-next-line import/no-cycle
import views from '../view/index.js';
// eslint-disable-next-line import/no-cycle
// import { MostrarUsuarioForPost } from './view-home.js';

const changeView = (hashUrl) => {
  //  usuario;
  // firebase.auth().onAuthStateChanged((user) => {
  //   console.log(user.email);
  //   console.log(MostrarUsuarioForPost(user.email));
  //   usuario = MostrarUsuarioForPost(user.email);
  //   console.log(usuario);
  // });
  // MostrarUsuarioForPost
  // firebase.auth().currentUser
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
    // case '#/home': return MostrarUsuarioForPost(firebase.auth().currentUser.email);
    case '#/profile': return seccion.appendChild(views.profile());
    case '#/conditions': return seccion.appendChild(views.conditions());
    default: return seccion.appendChild(views.notFound());
  }
};
export { changeView };
