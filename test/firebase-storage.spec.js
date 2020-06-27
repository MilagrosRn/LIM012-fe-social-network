import MockStorage from '../_mocks_/storage-mock.js';
import { subirAlStorage, eliminarStorage } from '../src/firebase/storage-controller.js';

global.firebase = MockStorage();
const uid = '8RTVKW86wQZ9vzkg8Yua8ithOug2';
const file = {
  name: 'icon',
  lastModified: '1592221734820',
  lastModifiedDate: 'Mon Jun 15 2020',
  webkitRelativePath: '',
  size: '65200',
};
describe('funcion subirAlStorage', () => {
  it('Deberia crear un archivo en el storage de firebase', (done) => {
    subirAlStorage(uid, file).then((doc) => {
      expect(doc).toBe('se subio al storage');
      done();
    });
  });
});
describe('funcion eliminarStorage', () => {
  it('Deberia borrar un archivo en el storage de firebase', (done) => {
    eliminarStorage(uid, file).then((doc) => {
      expect(doc).toBe('se borro del storage');
      done();
    });
  });
});
// const firebasemock = require('firebase-mock');
// // This runs the function specified as second argument to `jest.mock`.
// import moduleName from '../src/firebase/storage-controller.js';

// test('moduleName 1', () => {
//   jest.doMock('../src/firebase/storage-controller.js', () => jest.fn(() => 'storage'));
//   const moduleName = require('../src/firebase/storage-controller.js');
//   expect(moduleName()).toEqual('storage');
// });
// const eliminarStorage = require('../src/firebase/storage-controller.js');

// test('subir', () => {
//   const spy = jest.spyOn(eliminarStorage, 'get'); // we pass 'get'
//   const isPlaying = eliminarStorage;

//   expect(isPlaying).toHaveBeenCalled();
//   expect(isPlaying).toBe(true);

//   spy.mockRestore();
// });


// const mockstorage = new firebasemock.MockStorage();
// const mocksdkstorage = firebasemock.MockFirebaseSdk(
//   () => null,
//   () => new MockStorage().autoFlush(),
// );

// jest.mock('firebase-mock', () => jest.fn(() => mocksdkstorage));

// moduleName(); // Will return '42';


// moduleName(); // Will return 42
// foo(); // Will return 43
