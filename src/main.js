// eslint-disable-next-line import/named
import { changeView } from './view-controler/router.js';

const init = () => {
  changeView(window.location.hash);
};
window.addEventListener('load', init);
window.addEventListener('hashchange', init);
