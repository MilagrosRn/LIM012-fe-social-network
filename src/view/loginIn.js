// eslint-disable-next-line import/no-cycle
import { changeView } from '../view-controler/router.js';
// eslint-disable-next-line import/no-cycle
import { signingIn } from '../view-controler/viewc-login.js';
// eslint-disable-next-line import/no-cycle
import { btnInfo } from '../view-controler/view-info.js';
// eslint-disable-next-line import/no-cycle
import { loginGoogle, loguinFacebook } from '../firebase/firebase-conexion.js';

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
          <br><h1> Iniciar  Sesión </h1><br>
          <div class="input_contenedor">
            <i class="fas fa-envelope" class="icon_form"></i>
            <input type="text" class="correoL" placeholder="Correo" required>
          </div>
          <div class="input_contenedor">
            <i class='fas fa-key' class="icon_form"></i>
            <input type="password" class="contraseñaL"  placeholder="Contraseña" required>
          </div>
          <div id="msjError1"></div>     
          <div class="btnIngresar"><button type="button" class="log-in">Ingresar</button></div> 
          <div>
            <span class="textoS">--Puedes iniciar sesión con--</span>
          </div>
          <div class="btnFG">
            <button id="btnFacebook" class="btn submits frgt-pass">Facebook  <i class="fab fa-facebook-f"></i></button>
            <button id="btnGoogle" class="btn submits sign-up">Google <i class="fab fa-google-plus-g"></i></button>
          </div>
          <div><span>No tienes cuenta?  <b><a href="#/register" id="registrarse" class="alerta">Registrate</a></b></span></div>
        </form>
      </section>
    </section>
    `;
  const divElement = document.createElement('div');
  //   divElement.setAtribute('id', 'primera_vista_registro');
  divElement.innerHTML = viewLogin;
  const btnIngresar = divElement.querySelector('.log-in');
  btnIngresar.addEventListener('click', signingIn);

  const btnInformacion = divElement.querySelector('.info');
  btnInformacion.addEventListener('click', btnInfo);

  const btnFacebook = divElement.querySelector('#btnFacebook');
  btnFacebook.addEventListener('click', loguinFacebook);

  const btnGoogle = divElement.querySelector('#btnGoogle');
  btnGoogle.addEventListener('click', loginGoogle);

  const registrarse = divElement.querySelector('#registrarse');
  registrarse.addEventListener('click', () => {
    changeView('#/register');
  });
  return divElement;
};
