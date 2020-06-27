import MockFirebase from '../_mocks_/firestore-mock.js';
import {
  eliminarComentario, crearComentario, createDBUser, createUserGooFac, modificarUser, modificarPost, modificarComentario,
} from '../src/firebase/firestore-controller.js';

global.firebase = new MockFirebase();

const gmailUser = 'user_1@gmail.com';
const nameUser = 'user_3';
const imageProfileUser = 'imageProfileUser';
const imageProfile = 'https://i1.wp.com/comida-sana.jpg';
const imagenLink = 'https://i1.wp.com/comida-sana.jpg';
const imagenName = 'icon.png';
const likes = [];
const privacity = true;
const uid = '8RTVKW86wQZ9vzkg8Yua8ithOug2';
const description = '_description';
const documento = {
  id: 'cdfc',
  data: {},
};
const user = {
  uid: '8RTVKW86wQZ9vzkg8Yu',
  displayName: 'user_3',
};
// CREAR DATA


// PUEDES HACER ESTA FUNCION CON EL TUTORIAL?????? YO HICE MOCKS MANUALES PORQUE SE ME COMPLICO LA LIBRERIA


// describe('funcion crearPost', () => {
//   it('Deberia crear un documento en la coleccion posts', (done) => {
//     return crearPost(uid, nameUser, gmailUser, description, imageProfile, imagenLink, imagenName, likes, privacity).then((doc) => {
//       expect(doc).toBe('se creo un documento en coleccion');
//       done();
//     });
//   });
// });

// FALTA ELIMINAR DATA Y TRAER DATA (ES CON ONSNAPSHOT Y ESO NO SE PUEDE IMITAR CON MOCKS MANUALES),ESTA EN EL VIDEO

describe('funcion crearComentario', () => {
  it('Deberia crear un documento en la coleccion comentarios', (done) => {
    crearComentario(gmailUser, uid, nameUser, imagenLink, description).then((doc) => {
      expect(typeof doc).toBe('object');
      expect(doc).toStrictEqual({
        gmail: 'user_1@gmail.com',
        idPost: '8RTVKW86wQZ9vzkg8Yua8ithOug2',
        autor: 'user_3',
        imageAutor: 'https://i1.wp.com/comida-sana.jpg',
        contenido: '_description',
      });
      done();
    });
  });
});
describe('funcion createDBUser', () => {
  it('Deberia crear un documento en la coleccion users', (done) => {
    createDBUser(gmailUser, nameUser).then((doc) => {
      expect(doc).toStrictEqual({
        gmail: 'user_1@gmail.com',
        image_port: 'https://tremus.cl/wp-content/uploads/2018/04/HealthyFood.jpg',
        image_profile: 'https://i1.wp.com/unimooc.com/wp-content/uploads/2015/04/corazon-comida-sana.jpg',
        lenguaje: 'Idioma',
        location: 'Locacion',
        name_user: 'user_3',
        ocupation: 'Ocupacion',
      });
      done();
    });
  });
});
describe('funcion createUserGooFac', () => {
  it('Deberia crear un documento en la coleccion users si se loguea con un provedor', (done) => {
    createUserGooFac(gmailUser, nameUser, imageProfileUser).then((doc) => {
      expect(doc).toStrictEqual({
        gmail: 'user_1@gmail.com',
        image_port: 'https://tremus.cl/wp-content/uploads/2018/04/HealthyFood.jpg',
        image_profile: 'imageProfileUser',
        lenguaje: 'Idioma',
        location: 'Locacion',
        name_user: 'user_3',
        ocupation: 'Ocupacion',
      });
      done();
    });
  });
});
// ACTUALIZAR DATA
describe('funcion modificarPost', () => {
  it('Deberia actualizar un documento en la coleccion posts', (done) => {
    modificarPost(uid, description, privacity).then((doc) => {
      expect(typeof doc).toBe('object');
      expect(doc.privacity).toBeTruthy();
      done();
    });
  });
});
describe('funcion modificarUser', () => {
  it('Deberia actualizar un documento en la coleccion users', (done) => {
    modificarUser(gmailUser, description, description, description).then((doc) => {
      expect(typeof doc).toBe('object');
      expect(doc.location).toBe('_description');
      done();
    });
  });
});
describe('funcion modificarComentario', () => {
  it('Deberia actualizar un documento en la coleccion comentarios', (done) => {
    modificarComentario(uid, description).then((doc) => {
      expect(typeof doc).toBe('object');
      expect(doc.contenido).toBe('_description');
      done();
    });
  });
});
// ELIMINAR DATA
describe('funcion eliminarDocumentoEnPost', () => {
  it('Deberia actualizar un documento en la coleccion posts', (done) => {
    eliminarDocumentoEnPost(documento).then((doc) => {
      expect(doc).toBe('se borro documento');
      done();
    });
  });
});
describe('funcion eliminarComentario', () => {
  it('Deberia borrar un documento en la coleccion comentarios', (done) => {
    eliminarComentario(documento).then((doc) => {
      expect(doc).toBe('se borro documento');
      done();
    });
  });
});