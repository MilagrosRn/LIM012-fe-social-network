// DOM para las funciones de registro

// // funcion para enviar correos electronicos al registrarse
// const verificar = () => {
//   firebase.auth().currentUser.sendEmailVerification()
//     .then(() => {
//     // Verification email sent.
//     })
//     .catch((error) => {
//     // Error occurred. Inspect error.code.
//     });
// };

// const auth = firebase.auth();
// const registrarseFunction = () => {
//   const email = document.querySelector('.correo').value;
//   const password = document.querySelector('.coontraseña').value;
//   auth.createUserWithEmailAndPassword(email, password)
//     .then(() => {
//       verificar();
//     }).catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage, errorCode);
//     });
// };


// export { registrarseFunction };
