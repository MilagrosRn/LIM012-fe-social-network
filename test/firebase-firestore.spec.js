import MockFirebase from 'mock-cloud-firestore';
import {
  eliminarDocumentoEnPost,
  eliminarComentario,
  crearComentario,
  createDBUser,
  createUserGooFac,
  modificarUser,
  modificarPost,
  modificarComentario,
  crearPost,
  traerPost,
  traerUsuarios,
  traerComentarios,
} from '../src/firebase/firestore-controller.js';

const fixtureData = {
  __collection__: {
    users: {
      __doc__: {
        user1: {
          gmail: 'user_1@gmail.com',
          image_port: 'https://tremus.cl/wp-content/uploads/2018/04/HealthyFood.jpg',
          image_profile: 'https://i1.wp.com/unimooc.com/wp-content/uploads/2015/04/corazon-comida-sana.jpg',
          lenguaje: 'Idioma',
          location: 'Locacion',
          name_user: 'name User',
          ocupation: 'Ocupacion',
        },
      },
    },
    posts: {
      __doc__: {
        post1: {
          uid: '8RTVKW86wQZ9vzkg8Yua8ithOug2',
          autor: 'user_1',
          gmail: 'user_1@gmail.com',
          imageProfile: 'https://i1.wp.com/comida-sana.jpg',
          description: '_description',
          likes: [],
          privacity: true,
          imagenLink: 'https://i1.wp.com/comida-sana.jpg',
          imagenName: 'icon.png',
          date: '26 de junio de 2020 a las 22:13:23 UTC-5',
          contadorComentarios: [],
        },
      },
    },
    comentarios: {
      __doc__: {
        com1: {
          gmail: 'user_1@gmail.com',
          idPost: 'post1',
          autor: 'user_1',
          imageAutor: 'https://i1.wp.com/comida-sana.jpg',
          contenido: '_contenido',
        },
      },
    },
  },
};

const gmail = 'user_2@gmail.com';
const nameUser = 'user_2';
const imageProfile = 'https://i1.wp.com/comida-sana.jpg';
const imagenLink = 'https://i1.wp.com/comida-sana.jpg';
const imagenName = 'icon2.png';
const privacity = true;
const uid = '8RTVKW86wQZ9vzkg8Yua8ithg2Ou';
const description = '_description nuevo';

global.firebase = new MockFirebase(fixtureData);
// global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });


// describe('crearPost', () => {
//   it('Deberia agregar un post', done => crearPost(uid, nameUser, gmail, imageProfile, description, privacity, imagenLink, imagenName)
//     .then(() => traerPost(
//       (data) => {
//         const result = data.find(posts => posts.data().description === '_description nuevo');
//         expect(result.data().description).toBe('_description nuevo');
//         done();
//       },
//     )));
// });

describe('funcion crearPost', () => {
  it('Deberia agregar un post', done => crearPost(uid, nameUser, gmail, imageProfile, description, privacity, imagenLink, imagenName).then(() => {
    const callback = (posts) => {
      const result = posts.find(elemento => elemento.data().description === ('_description nuevo'));
      expect(result.data().description).toBe('_description nuevo');
      done();
    };
    traerPost(callback);
  }));
});

describe('funcion crearComentario', () => {
  it('Deberia agregar un comentario', done => crearComentario(gmail, 'post1', 'user_1', imagenLink, 'nuevo comentario').then(() => {
    const callback = (comentarios) => {
      const result = comentarios.find(elemento => elemento.contenido === ('nuevo comentario'));
      expect(result.contenido).toBe('nuevo comentario');
      done();
    };
    traerComentarios(callback, 'post1');
  }));
});

describe('funcion createDBUser', () => {
  it('Deberia crear un documento en la coleccion users', done => createDBUser('user_2@gmail.com', nameUser).then(() => {
    const callback = (usuarios) => {
      expect(usuarios.gmail).toBe('user_2@gmail.com');
      done();
    };
    traerUsuarios('user_2@gmail.com', callback);
  }));
});

describe('funcion createUserGooFac', () => {
  it('Deberia crear un documento en la coleccion users si se loguea con un provedor', done => createUserGooFac(gmail, nameUser, imageProfile).then(() => {
    const callback = (usuarios) => {
      expect(usuarios.gmail).toBe('user_2@gmail.com');
      done();
    };
    traerUsuarios('user_2@gmail.com', callback);
  }));
});

describe('funcion modificarPost', () => {
  it('Deberia actualizar un documento en la coleccion posts', done => modificarPost('post1', 'nueva descripcion', 'false').then(() => {
    const callback = (posts) => {
      const result = posts.find(elemento => elemento.data().description === ('nueva descripcion'));
      expect(result.data().description).toBe('nueva descripcion');
      done();
    };
    traerPost(callback);
  }));
});

describe('funcion modificarUser', () => {
  it('Deberia actualizar un documento en la coleccion users', done => modificarUser(gmail, description, description, description).then(() => {
    const callback = (usuarios) => {
      expect(usuarios.lenguaje).toBe('_description nuevo');
      expect(usuarios.location).toBe('_description nuevo');
      expect(usuarios.ocupation).toBe('_description nuevo');
      done();
    };
    traerUsuarios('user_2@gmail.com', callback);
  }));
});

describe('funcion modificarComentario', () => {
  it('Deberia actualizar un documento en la coleccion comentarios', done => modificarComentario('com1', 'nuevo comentario').then(() => {
    const callback = (comentarios) => {
      const result = comentarios.find(elemento => elemento.contenido === ('nuevo comentario'));
      expect(result.contenido).toBe('nuevo comentario');
      done();
    };
    traerComentarios(callback, 'post1');
  }));
});

// ELIMINAR DATA
describe('funcion eliminarDocumentoEnPost', () => {
  it('Deberia borrar un documento en la coleccion posts', done => eliminarDocumentoEnPost('post1').then(() => {
    const callback = (posts) => {
      const result = posts.find(elemento => elemento.id === 'post1');
      expect(result).toBe(undefined);
      done();
    };
    traerPost(callback);
  }));
});

describe('funcion eliminarComentario', () => {
  it('Deberia borrar un documento en la coleccion comentarios', done => eliminarComentario('com1').then(() => {
    const callback = (comentarios) => {
      const result = comentarios.find(elemento => elemento.id === 'com1');
      expect(result).toBe(undefined);
      done();
    };
    traerComentarios(callback, 'post1');
  }));
});
// describe('darLike', () => {
//   it('Deberia dar Like a un post', done => darLike('user1', postP)
//     .then(() => traerPost((data) => {
//       console.log(data);
//       const result = data.find(posts => posts.id === 'post1');
//       console.log(result.data().likes);
//       expect(result.data().likes).toBe(['user1']);
//       done();
//     })));
// });
