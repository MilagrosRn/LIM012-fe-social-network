// eslint-disable-next-line import/no-cycle
import { changeView } from './router.js';

export const btnInfo = () => {
  const modal = document.getElementById('modal');
  const span = document.getElementsByClassName('closeInfo')[0];
  const body = document.getElementsByTagName('body')[0];
  modal.style.display = 'block';
  body.style.position = 'static';
  body.style.height = '100%';
  body.style.overflow = 'hidden';
  span.onclick = () => {
    modal.style.display = 'none';
    body.style.position = 'inherit';
    body.style.height = 'auto';
    body.style.overflow = 'visible';
    changeView('#/login');
  };
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      body.style.position = 'inherit';
      body.style.height = 'auto';
      body.style.overflow = 'visible';
    }
  };
};
