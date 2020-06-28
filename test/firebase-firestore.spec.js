/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
// import MockFirebase from 'mock-cloud-firestore';
import MockFirebase from '../_mocks_/firestore-mock.js';
import {
  eliminarDocumentoEnPost, eliminarComentario, crearComentario, createDBUser, createUserGooFac, modificarUser, modificarPost, modificarComentario,
} from '../src/firebase/firestore-controller.js';

global.firebase = new MockFirebase();

const gmailUser = 'user_1@gmail.com';
const nameUser = 'user_3';
const imageProfileUser = 'imageProfileUser';
const imagenLink = 'https://i1.wp.com/comida-sana.jpg';
const imagenName = 'icon.png';
const likes = [];
const privacity = true;
const uid = '8RTVKW86wQZ9vzkg8Yua8ithOug2';
const description = '_description';
const documento = 'Av5OagKGiJKeslxvNGkI';
// CREAR DATA
// describe('funcion crearPost', () => {
//   it('Deberia crear un documento en la coleccion posts', (done) => {
//     crearPost(uid, nameUser, gmailUser, description, imageProfile, imagenLink, imagenName, likes, privacity).then((doc) => {
//       console.log(doc);
//       expect(typeof doc).toBe('object');
//       expect(doc).toBe('se creo un documento en coleccion');
//       done();
//     });
//   });
// });
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

// const fixtureData = {
//   __collection__: {
//     users: {
//       __doc__: {
//         user_1: {
//           gmail: 'user_1@gmail.com',
//           image_port: 'https://Food.jpg',
//           image_profile: 'https://sana.jpg',
//           lenguaje: 'Idioma',
//           location: 'Locacion',
//           name_user: 'user_1',
//           ocupation: 'Ocupacion',
//         },
//         user_2: {
//           gmail: 'user_2@gmail.com',
//           image_port: 'https://Food.jpg',
//           image_profile: 'https://sana.jpg',
//           lenguaje: 'Idioma',
//           location: 'Locacion',
//           name_user: 'user_2',
//           ocupation: 'Ocupacion',
//         },
//       },
//     },
//   },
// };
// const gmailUser='user_1@gmail.com'
// const nameUser= 'user_3'

// global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

// describe('funcion createDBUser', () => {
//   it('Debería registrar un usuario', (done) => {
//     return createDBUser(gmailUser, nameUser)
//       .then(() => traerUsuarios(
//         (data) => {
//           const result = data.find((note) => note.name_user === 'user_3');
//           expect(result.title).toBe('user_3');
//           done()
//         }
//       ))
//   });
// });
// global.firebase = new MockFirebase();


// describe('funcion createDBUser', () => {
//   it('Deberia crear un documento en la coleccion posts', (done) => {
//     createDBUser(gmail, autor).then((doc) => {
//       expect(typeof doc).toBe('object');
//       done();
//     });
//   });
// });
// ------------------------
// describe('funcion crearPost', () => {
//   it('Deberia crear un documento en la coleccion posts', done => crearPost(
//     uid, autor, gmail, description, imageProfile, imagenLink, imagenName, likes, privacity,
//   ).then((doc) => {
//     expect(typeof doc).toBe('object');
//     done();
//   }).then((data) => {
//   .then((data) => {
//   const result = data.forEach(elem => typeof elem.likes === 'object');
//   expect(result.likes).toBe('object');
// })
//   }).then((result) => {
//     // const result = data.forEach(elem => typeof elem.likes === 'object');
//     // expect(result.likes).toBe('object');
//     traerPost(result);
//   })
//   );
// });
