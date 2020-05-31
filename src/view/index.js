// eslint-disable-next-line import/no-cycle
import _login from './loginIn.js';
import _registro from './register.js';
import _home from './home.js';
import _notFound from './notFound.js';

export default {
  login: _login,
  register: _registro,
  home: _home,
  notFound: _notFound,
};
// export { views };
