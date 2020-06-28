/* eslint-disable no-loop-func */
/* eslint-disable max-len */
import { eliminarStorage } from './storage-controller.js';

const createDBUser = (gmailUser, nameUser) => firebase.firestore().collection('users').doc(gmailUser).set({
  gmail: gmailUser,
  image_port: 'https://tremus.cl/wp-content/uploads/2018/04/HealthyFood.jpg',
  image_profile: 'https://i1.wp.com/unimooc.com/wp-content/uploads/2015/04/corazon-comida-sana.jpg',
  lenguaje: 'Idioma',
  location: 'Locacion',
  name_user: nameUser,
  ocupation: 'Ocupacion',
});
const createUserGooFac = (gmailUser, nameUser, imageProfileUser) => firebase.firestore().collection('users').doc(gmailUser).set({
  gmail: gmailUser,
  image_port: 'https://tremus.cl/wp-content/uploads/2018/04/HealthyFood.jpg',
  image_profile: imageProfileUser,
  lenguaje: 'Idioma',
  location: 'Locacion',
  name_user: nameUser,
  ocupation: 'Ocupacion',
});
const crearComentario = (_gmail, _idPost, _autor, _imageAutor, _contenido) => firebase.firestore().collection('comentarios').add({
  gmail: _gmail,
  idPost: _idPost,
  autor: _autor,
  imageAutor: _imageAutor,
  contenido: _contenido,
  date: firebase.firestore.FieldValue.serverTimestamp(),
});
const crearPost = (_uid, _nameUser, _gmail, _imageProfile, _description, _privacity, _imagenLink, _imagenName) => firebase.firestore().collection('posts').add({
  uid: _uid,
  autor: _nameUser,
  gmail: _gmail,
  imageProfile: _imageProfile,
  description: _description,
  likes: [],
  privacity: _privacity,
  imagenLink: _imagenLink,
  imagenName: _imagenName,
  date: firebase.firestore.FieldValue.serverTimestamp(),
});
const eliminarDocumentoEnPost = documento => firebase.firestore().collection('posts').doc(documento).delete();

const eliminarPost = (doc) => {
  const documento = doc.id;
  eliminarDocumentoEnPost(documento)
    .then(() => {
      console.log('Document successfully deleted!');
      if (doc.data().imagenLink !== null) {
        const uid = doc.data().uid;
        const file = doc.data().imagenName;
        eliminarStorage(uid, file)
          .then(() => {
            console.log('se borro de storage');
          });
      }
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};
const eliminarComentario = doc => firebase.firestore().collection('comentarios').doc(doc).delete();
// .then(() => {
//   console.log('Document successfully deleted!');
// })
// .catch((error) => {
//   console.error('Error removing document: ', error);
// });
const modificarPost = (_idPost, _description, _privacity) => firebase.firestore().collection('posts').doc(_idPost).update({
  description: _description,
  privacity: _privacity,
});

const modificarUser = (emailUser, ocupacionUser, locacionUser, lenguajeUser) => firebase.firestore().collection('users').doc(emailUser).update({
  lenguaje: lenguajeUser,
  location: locacionUser,
  ocupation: ocupacionUser,
});
const modificarComentario = (idComentario, _contenido) => firebase.firestore().collection('comentarios').doc(idComentario).update({
  contenido: _contenido,
});
const darLike = (user, documento) => firebase.firestore().collection('posts').doc(documento.id).update({
  likes: firebase.firestore.FieldValue.arrayUnion(user.uid),
});
const quitarLike = (user, documento) => firebase.firestore().collection('posts').doc(documento.id).update({
  likes: firebase.firestore.FieldValue.arrayRemove(user.uid),
});
const traerComentarios = (callback, _idPost) => {
  firebase.firestore().collection('comentarios').orderBy('date', 'desc').where('idPost', '==', _idPost)
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((comentData) => {
        data.push({ id: comentData.id, ...comentData.data() });
      });
      callback(data);
    });
};
const traerPost = (callback) => {
  firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((postData) => {
      data.push(postData);
    });
    callback(data);
  });
};

const traerUsuarios = (email, cb) => {
  firebase.firestore().collection('users').doc(email).onSnapshot((querySnapshot) => {
    cb(querySnapshot.data());
  });
};
<<<<<<< HEAD
=======
const modificarUser = (emailUser, ocupacionUser, locacionUser, lenguajeUser) => {
  firebase.firestore().collection('users').doc(emailUser).update({
    lenguaje: lenguajeUser,
    location: locacionUser,
    ocupation: ocupacionUser,
  });
};

const darLike = (user, documento) => {
  firebase.firestore().collection('posts').doc(documento.id).update({
    likes: firebase.firestore.FieldValue.arrayUnion(user.uid),
  });
};
const quitarLike = (user, documento) => {
  firebase.firestore().collection('posts').doc(documento.id).update({
    likes: firebase.firestore.FieldValue.arrayRemove(user.uid),
  });
};
const crearComentario = (_gmail, _idPost, _autor, _imageAutor, _contenido) => firebase.firestore().collection('comentarios').add({
  gmail: _gmail,
  idPost: _idPost,
  autor: _autor,
  imageAutor: _imageAutor,
  contenido: _contenido,
});

const eliminarComentario = (doc) => {
  firebase.firestore().collection('comentarios').doc(doc).delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};
const modificarComentario = (idComentario, _contenido) => {
  firebase.firestore().collection('comentarios').doc(idComentario).update({
    contenido: _contenido,
  });
};
const traerComentarios = (callback) => {
  firebase.firestore().collection('comentarios').onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((comentData) => {
      data.push(comentData);
    });
    callback(data);
  });
};
>>>>>>> 2192c9b5d48daa7b7c8b296e8a10757af4e0b5fe
export {
  createDBUser,
  createUserGooFac,
  crearPost,
  eliminarPost,
  eliminarDocumentoEnPost,
  modificarPost,
  traerPost,
  traerUsuarios,
  modificarUser,
  darLike,
  quitarLike,
  crearComentario,
  eliminarComentario,
  modificarComentario,
  traerComentarios,
};
