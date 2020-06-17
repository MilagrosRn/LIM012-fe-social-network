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
