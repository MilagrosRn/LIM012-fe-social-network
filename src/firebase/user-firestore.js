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
          <p class="titulos">${doc.data().name_user}</p>
        </div>
        <div class="divbottom">
          <div>
            <p class="titulos">Detalles</p>
            <span class="btnEditUSer"><img class="logo_editarUSer" src="https://image.flaticon.com/icons/png/512/61/61456.png"></span>
          </div>
          <div class="divPEditar">
            <p class="editUser">${doc.data().ocupation}</p>
            <p class="editUser">${doc.data().location}</p>
            <p class="editUser">${doc.data().lenguaje}</p>
          </div>
          <div class="divInputEdit">
            <input type="text" class="editUser input_ocupation" value="${doc.data().ocupation}">
            <input type="text" class="editUser input_location" value="${doc.data().location}">
            <input type="text" class="editUser input_lenguaje" value="${doc.data().lenguaje}">
          </div>
          <div><input type="button" class="botonGuardarUserEdit" value="Guardar"></div>
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
