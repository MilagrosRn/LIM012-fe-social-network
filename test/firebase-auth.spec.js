//  tarear funciones puras de firebase

import {
  loguearUser, createUser, verificationEmail,
} from '../src/firebase/firebase-conexion.js';


const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);
describe('funcion loguearUser con email y password', () => {
  it('Deberia loguearse un usuario con email y conraseña', (done) => {
    loguearUser('example@gmail.com', '123456').then((user) => {
      expect(user.email).toMatchSnapshot('example@gmail.com');
      done();
    });
  });
});
describe('funcion createUser con email y password', () => {
  it('Deberia crearse un usuario con email y conraseña', (done) => {
    createUser('exampleCreate@outlook.com', '123456').then((user) => {
      expect(user.email).toMatchSnapshot('exampleCreate@outlook.com');
      done();
    });
  });
});


describe('funcion verificationEmail con email y password', () => {
  it('Deberia enviarse un email a un usuario registrado', () => {
    expect.assertions(1);
    firebase.auth().currentUser.sendEmailVerification = verificationEmail();
  });
});
