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