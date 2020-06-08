/* eslint-disable import/no-cycle */
import { changeView } from '../view-controller/router.js';
// import { loginFunction, loginFacebook, loginGoogle } from '../view-controller/view-loginIn.js';
import { signInAccount, signInGoogleAccount, signInFacebookAccount } from '../firebase/authentification.js';
import { btnInfo } from '../view-controller/view-info.js';
// import { consultarUsuario } from '../firebase/user-firestore.js';

export default () => {
  const viewLogin = `
  <div class="icon_info">
  <div><span class="info"><i class="fas fa-info-circle"></i></span></div>
  <div class="header">
    <img class="logo" src="imagenes/logo_oficial.png" >
  </div>
  </div>
    <div id="modal" class="modalContainer">
      <div class="content-modal">
      <span class="closeInfo">×</span>
      <h1>BIENVENIDO!!!</h1>
      <h4  class="alerta">Esta red social es para ti</h4>
      <p>Aquí encontraras personas que compartiran contigo habitos saludables como recetas bajo en grasa, rutinas de ejercicio, reseñas de restaurantes y muchisimo mas</p>
    </div>
  </div>
  <section class ="espacio-portada">
      <div class="portada">
        <img class="logo" src="./imagenes/logo_oficial.png" >
      </div>


        <section class="espacio-login">
        <form class="formulario_registro">
          <br>
          <h1>Iniciar Sesión</h1>
          <br>
          <div class="input_contenedor">
            <i class="fas fa-envelope iconLogin" class="icon_form"></i>
            <input type="text" class="correo" placeholder="Correo" >
          </div>
          <div class="input_contenedor">
            <i class='fas fa-key iconLogin' class="icon_form"></i>
            <input type="password" class="coontraseña"  placeholder= "Contraseña" >
          </div>
          <div class ="divValidationsLogin"></div>
          <div class="btnIngresar"><button class="log-in">Ingresar</button></div> 
          <div>
          <hr class="separador"> <span class="texto_inicio_opcional">Puedes iniciar sesión con</span> <hr class="separador">
          </div>
          <div class="btnFG">
            <button id="btnFacebook" class="btn submits frgt-pass">Facebook  <i class="fab fa-facebook-f"></i></button>
            <button id="btnGoogle" class="btn submits sign-up">Google <i class="fab fa-google-plus-g"></i></button>
          </div>
          <div><span  class="texto_inicio_opcional">¿No tienes una cuenta?  <b><a href="#/register" id="btnRegistrarse" >Registrate</a></b></span></div>
        </form>
        </section>
     </section>
      `;
  const divElement = document.createElement('div');
  divElement.id = 'primera_vista_registro';
  divElement.innerHTML = viewLogin;

  const btnLogIn = divElement.querySelector('.log-in');
  const btnFacebook = divElement.querySelector('#btnFacebook');
  const btnGoogle = divElement.querySelector('#btnGoogle');
  const btnRegistrarse = divElement.querySelector('#btnRegistrarse');
  const divValidationsLogin = divElement.querySelector('.divValidationsLogin');
  const btnInformacion = divElement.querySelector('.info');

  btnInformacion.addEventListener('click', btnInfo);

  btnLogIn.addEventListener('click', () => {
    const email = document.querySelector('.correo').value;
    const password = document.querySelector('.coontraseña').value;
    if (email === '') {
      divValidationsLogin.textContent = 'Querido usuario, ingresa un email';
    } else if (!(email.includes('@'))) {
      divValidationsLogin.textContent = 'Querido usuario, ingresa un email valido';
    } else if (password === '') {
      divValidationsLogin.textContent = 'Querido usuario, ingresa una contraseña';
    } else {
      signInAccount(email, password);
    }
  });

  btnFacebook.addEventListener('click', signInFacebookAccount);
  btnGoogle.addEventListener('click', signInGoogleAccount);
  btnRegistrarse.addEventListener('click', () => {
    changeView('#/register');
  });

  return divElement;
};
