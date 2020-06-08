// // Initialize Cloud Firestore through Firebase
// firebase.initializeApp({
//   apiKey: 'AIzaSyDSv47hDN_B_cE3_GHAKDvGGdhhkkQ8Kjg',
//   authDomain: 'red-social-2085d.firebaseapp.com',
//   projectId: 'red-social-2085d',
// });
const db = firebase.firestore();// trae elementos de la coleccion de post en firebase
export const agregarUser = () => {
  // db.collection('users').add({
  //   gmail: newGmail,
  //   image_port: ' ',
  //   image_profile: ' ',
  //   lenguaje: 'Español',
  //   location: 'Lima, peru',
  //   name_user: newUser,
  //   ocupation: ' ',
  // })
  db.collection('users').set({
    gmail: 'judith@',
    image_port: ' ',
    image_profile: ' ',
    lenguaje: 'Español',
    location: 'Lima, peru',
    name_user: 'judith',
    ocupation: ' ',
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};
// console.log(result.user.displayName);
// console.log(result.user.email);
// console.log(result.user.emailVerified);
// console.log(result.user.photoURL);
// console.log(result.user.isAnonymous);
// console.log(result.user.uid);
// console.log(result.user.providerData);

// export const getPosts = (data) => {
//   if (data.length) {
//     const datosHTML = '';
//     data.forEach((element) => {
//       const liPost = `
//         <li>
//             <h3>${element.title}<h3>
//             <p>${element.descrip}</p>
//         </li>
//         `;
//     });
//   }
// };
