const db = firebase.firestore();
export const createDBUser = (gmailUser, nameUser) => {
  db.collection('users').doc(gmailUser).set({
    gmail: gmailUser,
    image_port: 'https://tremus.cl/wp-content/uploads/2018/04/HealthyFood.jpg',
    image_profile: 'https://i1.wp.com/unimooc.com/wp-content/uploads/2015/04/corazon-comida-sana.jpg',
    lenguaje: 'Español',
    location: 'Lima, peru',
    name_user: nameUser,
    ocupation: ' ',
  });
};
export const createUserGooFac = (gmailUser, nameUser, imageProfileUser) => {
  db.collection('users').doc(gmailUser).set({
    gmail: gmailUser,
    image_port: 'https://tremus.cl/wp-content/uploads/2018/04/HealthyFood.jpg',
    image_profile: imageProfileUser,
    lenguaje: 'Español',
    location: 'Lima, peru',
    name_user: nameUser,
    ocupation: ' ',
  });
};
export const consultarUsuario = (gmailUser) => {
  const mostrarUsuario = document.getElementById('userDescription');
  db.collection('users').where('gmail', '==', gmailUser)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, ' => ', doc.data());
        mostrarUsuario.innerHTML = ' ';
        mostrarUsuario.innerHTML += `
        <div class="divtop">
          <img src="${doc.data().image_port}" class="imagePortada">
          <img src="${doc.data().image_profile}" class="imagePerfile">
          <p>${doc.data().name_user}</p>
        </div>
        <div class="divbottom">
          <p>Detalles</p>
          <p>${doc.data().ocupation}</p>
          <p>${doc.data().location}</p>
          <p>${doc.data().lenguaje}</p>
        </div>
`;
      });
    })
    .catch((error) => {
      console.log('Error extraer documents: ', error);
    });
};
// export const createUserGooFac = (gmailUser, nameUser, imageProfileUser) => {
//   db.collection('users').add({
//     gmail: gmailUser,
//     image_port: 'https://tremus.cl/wp-content/uploads/2018/04/HealthyFood.jpg',
//     image_profile: imageProfileUser,
//     lenguaje: 'Español',
//     location: 'Lima, peru',
//     name_user: nameUser,
//     ocupation: ' ',
//   });
// };
