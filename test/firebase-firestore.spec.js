import { 
  createDBUser,createUserGooFac, crearPost,  subirAlStorage,eliminarStorage,
  eliminarPost,modificarPost, traerPost, traerUsuarios, modificarUser, darLike, quitarLike, 
} from '../src/firebase/firestore-controller.js';

describe('example', () => {
  it('debería ser una función', () => {
    expect(typeof example).toBe('function');
  });
});
