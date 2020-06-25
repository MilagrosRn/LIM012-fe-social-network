import {
  signIn, createUser, signInGoogle, signOut,
} from '../src/firebase/auth-controller.js';
import { mocksdk } from '../_mocks_/firebase-mock.js';

global.firebase = mocksdk;


describe('funcion signIn con email y password', () => {
  it('Deberia loguearse un usuario con email y conraseña', (done) => {
    signIn('example@gmail.com', '123456').then((user) => {
      expect(user.email).toBe('example@gmail.com');
      done();
    });
  });
});
describe('funcion createUser con email y password', () => {
  it('Deberia crearse un usuario con email y conraseña', (done) => {
    createUser('exampleCreate@outlook.com', '123456').then((user) => {
      expect(user.email).toBe('exampleCreate@outlook.com');
      done();
    });
  });
});
describe('funcion signInGoogle para iniciar sesion con google', () => {
  it('Deberia iniciar sesion con Google', () => {
    signInGoogle().then((user) => {
      expect(user.emailVerified).toBe(true);
    });
  });
});

describe('funcion signOut para cerrar sesion', () => {
  it('Deberia cerrar sesion', () => {
    signOut().then((user) => {
      expect(user.emailVerified).toBe(false);
    });
  });
});
