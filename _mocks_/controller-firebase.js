import { mockFirebase } from 'firebase-mock';
//  tarear funciones puras de firebase
import {
  loguearUser,
} from '../src/firebase/firebase-conexion.js';

describe('funcion login con email y password', () => {
  it('Deberia loguearse un usuario con emaily conraseña', (done) => {
    loguearUser('example@gmail.com', '123456').then((userLog) => {
      expect(userLog.email).toBe('example@gmail.com');
      done();
    });
  });
});
