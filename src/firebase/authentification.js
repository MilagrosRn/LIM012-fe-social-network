/* eslint-disable import/no-cycle */
// funciones puras usando firebase
import { changeView } from '../view-controller/router.js';
import { createDBUser, createUserGooFac, consultarUsuario } from './user-firestore.js';
import {
  signIn, createUser, signInGoogle,
} from './auth-controller.js';
// obtener gmial del usuario logueado
// export const obtenerGmail = (gmailUser) => {

// };
// FUNCION PARA LOGUEAR UN USUARIO
const signInAccount = (email, password) => {
  // consultarUsuario(email);
  signIn(email, password)
    .then((result) => {
      if (result.user.emailVerified === false) {
        firebase.auth().signOut();
      } else {
        changeView('#/home');
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const divValidationsLogin = document.querySelector('.divValidationsLogin');
      if (errorCode === 'auth/invalid-email' || errorCode === 'auth/wrong-password') {
        divValidationsLogin.innerHTML = 'Querido usuario ingreso un correo o contraseña invalidos';
      } else {
        divValidationsLogin.innerHTML = 'Querido usuario este correo no pertenece a ninguna cuenta';
      }
    });
};

// FUNCION PARA CREAR UN USUARIO Y VERIFICACION CON CORREO

const createAccount = (newEmail, newPassword, newUser) => {
  const divValidations = document.querySelector('.divValidations');
  createDBUser(newEmail, newUser);
  createUser(newEmail, newPassword)
    .then((result) => {
      console.log(result);
      const modal = document.getElementById('validarModal');
      const span = document.getElementsByClassName('close')[0];
      const body = document.getElementsByTagName('body')[0];
      modal.style.display = 'block';
      body.style.position = 'static';
      body.style.height = '100%';
      body.style.overflow = 'hidden';
      span.onclick = () => {
        modal.style.display = 'none';
        body.style.position = 'inherit';
        body.style.height = 'auto';
        body.style.overflow = 'visible';
        changeView('#/login');
      };
      window.onclick = (event) => {
        if (event.target === modal) {
          modal.style.display = 'none';
          body.style.position = 'inherit';
          body.style.height = 'auto';
          body.style.overflow = 'visible';
        }
      };
      // esta accediendo y trayendo el nombre dle usuario
      result.user.updateProfile({
        displayName: newUser,
      });

      const configuracion = {
        url: 'http://localhost:5000/#/home',
      };

      result.user.sendEmailVerification(configuracion)
        .catch((error) => {
          divValidations.textContent = 'ha ocurrido un error intente nuevamente';
        });
      // que no guarde al usuario hasta clickear en el link
      firebase.auth().signOut();
    })
    .catch((error) => {
      const errorCode = error.code;

      if (errorCode === 'auth/email-already-in-use') {
        divValidations.innerHTML = 'Querido usuario, este correo ya esta en uso';
      } else if (errorCode === 'auth/invalid-email') {
        divValidations.innerHTML = 'Querido usuario, ingrese un correo válido';
      } else if (errorCode === 'auth/weak-password') {
        divValidations.textContent = 'Querido usuario, recuerde que su contraseña debe tener 6 digitos';
      } else {
        divValidations.textContent = 'ha ocurrido un error intente nuevamente';
      }
    });
};

// FUNCION PARA LOGUEAR USUARIO CON GOOGLE
const signInGoogleAccount = () => {
  // para acceder con un Proveedor de autenticación de Google.
  signInGoogle()
    .then((result) => {
      // const imagenUser = document.querySelector('.img_logo_user');
      // imagenUser.attr('src', result.user.photoURL);
      const name = result.additionalUserInfo.profile.name;
      const email = result.additionalUserInfo.profile.email;
      const image = result.additionalUserInfo.profile.picture;
      const id = result.additionalUserInfo.profile.id;
      console.log(id);
      if (result.additionalUserInfo.isNewUser === true) {
        createUserGooFac(email, name, image);
      }
      // console.log(result.additionalUserInfo.isNewUser);funciona
      changeView('#/home');
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode) {
        const divValidationsLogin = document.querySelector('.divValidationsLogin');
        divValidationsLogin.innerHTML = 'Error al autenticar con Google';
      }
    });
};

// FUNCION PARA LOGUEAR USUARIO CON FACEBOOK

const signInFacebookAccount = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      console.log('loguinfacebook');
      const name = result.additionalUserInfo.profile.name;
      const email = result.additionalUserInfo.profile.email;
      const image = result.additionalUserInfo.profile.picture.data.url;
      const id = result.additionalUserInfo.profile.id;
      console.log(id);
      if (result.additionalUserInfo.isNewUser === true) {
        createUserGooFac(email, name, image);
      }
    })
    .catch(() => console.log('error facebook'));
};

export {
  createAccount, signInAccount, signInGoogleAccount, signInFacebookAccount,
};
