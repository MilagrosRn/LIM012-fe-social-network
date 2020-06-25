/* eslint-disable no-loop-func */
/* eslint-disable max-len */
const createDBUser = (gmailUser, nameUser) => {
  firebase.firestore().collection('users').doc(gmailUser).set({
    gmail: gmailUser,
    image_port: 'https://tremus.cl/wp-content/uploads/2018/04/HealthyFood.jpg',
    image_profile: 'https://i1.wp.com/unimooc.com/wp-content/uploads/2015/04/corazon-comida-sana.jpg',
    lenguaje: 'Idioma',
    location: 'Locacion',
    name_user: nameUser,
    ocupation: 'Ocupacion',
  });
};
const createUserGooFac = (gmailUser, nameUser, imageProfileUser) => {
  firebase.firestore().collection('users').doc(gmailUser).set({
    gmail: gmailUser,
    image_port: 'https://tremus.cl/wp-content/uploads/2018/04/HealthyFood.jpg',
    image_profile: imageProfileUser,
    lenguaje: 'Idioma',
    location: 'Locacion',
    name_user: nameUser,
    ocupation: 'Ocupacion',
  });
};

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
const subirAlStorage = (_file, _uid) => {
  const refStorage = firebase.storage().ref(`imagesUsers/${_uid}/${_file.name}`);
  const task = refStorage.put(_file);
  return task;
};
const eliminarStorage = (_uid, _file) => {
  const desertRef = firebase.storage().ref(`imagesUsers/${_uid}/${_file.nombre}`);
  return desertRef.delete();
};
const eliminarPost = (doc) => {
  const documento = doc.id;
  firebase.firestore().collection('posts').doc(documento).delete()
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


const modificarPost = (_idPost, _description, _privacity) => {
  firebase.firestore().collection('posts').doc(_idPost).update({
    description: _description,
    privacity: _privacity,
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

export {
  createDBUser,
  createUserGooFac,
  crearPost,
  subirAlStorage,
  eliminarStorage,
  eliminarPost,
  modificarPost,
  traerPost,
  traerUsuarios,
  modificarUser,
  darLike,
  quitarLike,
};
