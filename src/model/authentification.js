/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
// funciones puras usando firebase
import { changeView } from '../view-controller/router.js';
import {
  signIn, createUser, signInGoogle, signOut,
} from '../firebase/auth-controller.js';

// FUNCION PARA LOGUEAR UN USUARIO

const signInAccount = (email, password) => {
  signIn(email, password)
    .then((result) => {
      if (!result.user.emailVerified) {
        // const avatarUser = document.querySelector('.img_avatar_user');
        // avatarUser.src = '../imagenes/degradado.png';
      // } else {
        // que no guarde datos hasta que no haya una verificacion correcta
        signOut();
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const divValidationsLogin = document.querySelector('.divValidationsLogin');
      switch (errorCode) {
        case 'auth/email-already-in-use':
          divValidationsLogin.textContent = 'Ya existe una cuenta con este correo';
          break;
        case 'auth/invalid-email':
          divValidationsLogin.textContent = 'Ingreso un correo invalidos';
          break;
        case 'auth/wrong-password':
          divValidationsLogin.textContent = 'Ingreso una contraseña invalida';
          break;
        default:
          divValidationsLogin.textContent = errorCode;
          break;
      }
    });
};

// FUNCION PARA CREAR UN USUARIO Y VERIFICACION CON CORREO

const createAccount = (newEmail, newPassword, newUser) => {
  const divValidations = document.querySelector('.divValidations');
  createUser(newEmail, newPassword)
    .then((result) => {
      // divValidations.innerHTML = 'Querido usuario te hemos enviado un link para acceder al email que ingresaste';
      // divValidations.style.color = 'green';
      const modal = document.getElementById('validarModal');
      const span = document.getElementsByClassName('close')[0];
      const body = document.getElementsByTagName('body')[0];
      modal.style.display = 'block';
      body.style.position = 'static';
      body.style.height = '100%';
      body.style.overflow = 'hidden';
      span.addEventListener('click', () => {
        modal.style.display = 'none';
        body.style.position = 'inherit';
        body.style.height = 'auto';
        body.style.overflow = 'visible';
        changeView('#/login');
      });
      window.addEventListener('click', (event) => {
        if (event.target === modal) {
          modal.style.display = 'none';
          body.style.position = 'inherit';
          body.style.height = 'auto';
          body.style.overflow = 'visible';
        }
      });
      // esta accediendo y trayendo el nombre del usuario de un objeto user
      // solo cuando decide registrarse
      result.user.updateProfile({
        displayName: newUser,
      });

      const configuracion = {
        url: 'http://localhost:5000/?#/home',
      };

      result.user.sendEmailVerification(configuracion)
        .catch((error) => {
          divValidations.textContent = 'ha ocurrido un error intente nuevamente';
        });
      // que no guarde al usuario hasta clickear en el link
      signOut();
    })
    .catch((error) => {
      const errorCode = error.code;

      if (errorCode === 'auth/email-already-in-use') {
        divValidations.textContent = 'Este correo ya esta en uso';
      } else if (errorCode === 'auth/invalid-email') {
        divValidations.textContent = 'Porfavor ingrese un correo válido';
      } else if (errorCode === 'auth/weak-password') {
        divValidations.textContent = 'Recuerde que su contraseña debe tener 6 digitos';
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
      // const imagenUser = document.querySelector('.img_avatar_user');
      // imagenUser.attr('src', result.user.photoURL);
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
    // const imagenUser = document.querySelector('.img_avatar_user');
    // imagenUser.attr('src', result.user.photoURL);
      changeView('#/home');
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode) {
        const divValidationsLogin = document.querySelector('.divValidationsLogin');
        divValidationsLogin.innerHTML = 'Error al autenticar con Facebook';
      }
    });
};

export {
  createAccount, signInAccount, signInGoogleAccount, signInFacebookAccount,
};