/* eslint-disable max-len */
// TRAE LOS POSTS ORDENADOS
const db = firebase.firestore();
export const createDBUser = (gmailUser, nameUser) => {
  db.collection('users').doc(gmailUser).set({
    gmail: gmailUser,
    image_port: 'https://tremus.cl/wp-content/uploads/2018/04/HealthyFood.jpg',
    image_profile: 'https://i1.wp.com/unimooc.com/wp-content/uploads/2015/04/corazon-comida-sana.jpg',
    lenguaje: 'Idioma',
    location: 'Locacion',
    name_user: nameUser,
    ocupation: 'Ocupacion',
  });
};
export const createUserGooFac = (gmailUser, nameUser, imageProfileUser) => {
  db.collection('users').doc(gmailUser).set({
    gmail: gmailUser,
    image_port: 'https://tremus.cl/wp-content/uploads/2018/04/HealthyFood.jpg',
    image_profile: imageProfileUser,
    lenguaje: 'Idioma',
    location: 'Locacion',
    name_user: nameUser,
    ocupation: 'Ocupacion',
  });
};

const getPosts = (callback) => {
  firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((postData) => {
      data.push(postData);
    });
    callback(data);
  });
};

const getUsers = (email, cb) => {
  firebase.firestore().collection('users').doc(email).onSnapshot((querySnapshot) => {
    cb(querySnapshot.data());
  });
};


// HABILITA TIMESTAMPS EN TIEMPO REAL
const constructorPost = () => {
  const settings = {
    timestampsInSnapshots: true,
  };
  firebase.firestore().settings(settings);
};

// CREAR POST
const createPost = (_uid, _nameUser, _gmail, _imageProfile, _description, _privacity, _imagenLink) => firebase.firestore().collection('posts').add({
  uid: _uid,
  autor: _nameUser,
  gmail: _gmail,
  imageProfile: _imageProfile,
  description: _description,
  likes: [],
  privacity: _privacity,
  imagenLink: _imagenLink,
  date: firebase.firestore.FieldValue.serverTimestamp(),
})
  .then((ref) => {
    console.log(ref.id);
  })
  .catch((error) => {
    console.log(error);
  });

const eliminarPost = (documento) => {
  firebase.firestore().collection('posts').doc(documento).delete()
    .then(() => {
      console.log('Document successfully deleted!');
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

export {
  getPosts, getUsers, createPost, eliminarPost, modificarPost,
};
