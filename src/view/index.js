/* eslint-disable import/no-cycle */
import _login from './loginIn.js';
import _registro from './register.js';
import _home from './home.js';
import _profile from './profile.js';
import _notFound from './404.js';
import _user from './user.js';
import _userModificado from './userModificado.js';
import _terminoscondiciones from './terminos-condiciones.js';

export default {
  login: _login,
  register: _registro,
  home: _home,
  profile: _profile,
  notFound: _notFound,
  user: _user,
  userModificado: _userModificado,
  conditions: _terminoscondiciones,
};
