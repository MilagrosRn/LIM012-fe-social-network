/* eslint-disable import/no-cycle */
/* eslint-disable no-cond-assign */
import { changeView } from '../view-controller/router.js';
import { btnInfo } from '../view-controller/view-info.js';
import { registrarUsuario } from '../view-controller/view-signIn.js';

export default () => {
  const viewRegistro = `
  <div class="containerFondo">
    <div class="icon_info">
     <div><span class="info"><i class="fas fa-info-circle"></i></span></div>
      <div class="header">
       <img class="logo" src="./imagenes/logo_oficial.png" >
      </div>
    </div>
    <div id="modal" class="modalContainer">
      <div class="content-modal">
        <span class="closeInfo">×</span>
        <h2>BIENVENIDO!!!</h2>
        <h4 class="alerta">Esta red social es para ti</h4>
        <p>Aquí encontraras personas que compartiran contigo habitos saludables como recetas bajo en grasa, rutinas de ejercicio, reseñas de restaurantes y muchisimo mas</p>
      </div>
    </div>
    <section class ="espacio-portada">
      <div class="portada">
      <img class="logo" src="./imagenes/logo_oficial.png" >
      </div>
      <section class ="espacio-login">
      <form class="formulario_registro">
        <br>
        <h1>Registrate</h1>
        <br>
        <div class="input_contenedor">
          <i class="fas fa-user"  class="icon_form"></i>
          <input type="text" class="usuario" placeholder="Usuario">
        </div> 
        <div class="input_contenedor">
          <i class="fas fa-envelope" class="icon_form"></i>
          <input type="text" class="correo" placeholder="Correo">
        </div>
        <div class="input_contenedor">
          <i class='fas fa-key' class="icon_form"></i>
          <input type="password" class="coontraseña"  placeholder="Contraseña" autocomplete="nope">
        </div>
        <input type="checkbox" id="condiciones">
        <label class="text_form"for="condiciones">Al registrarme acepto<strong><a href="#/conditions" class="terminos"> Terminos y Condiciones</a></strong></label>
        <div class ="divValidations"></div>
        <br>
        <input type="button" class="boton_registrarse" id="reg"value="Registrarme">
        <hr>
        <b><p>¿Ya tienes una cuenta? <a href="#/login" class="inicio_sesion">Inicia Sesion</a></p></b>
      </form>
      </section>
    </section>
    <div id="validarModal" class="modalContainer">
      <div class="modal-content">
        <span class="close">×</span>
        <h1>VALIDAR CORREO</h1>
        <h4>Registros</h4>
        <p>Te hemos enviado un mensaje de verificacion al correo ingresado, lo puedes ver en tu bandeja de entrada o en span</p>
      </div>
    </div>
  </div>`;
  const divElement = document.createElement('div');
  divElement.id = 'segunda_vista_registro';
  divElement.innerHTML = viewRegistro;

  const btnInformacion = divElement.querySelector('.info');
  btnInformacion.addEventListener('click', btnInfo);

  const btnRegistrarse = divElement.querySelector('.boton_registrarse');
  btnRegistrarse.addEventListener('click', () => {
    registrarUsuario();
  });

  const btnInicioSesion = divElement.querySelector('.inicio_sesion');
  btnInicioSesion.addEventListener('click', () => {
    window.location.hash = '#/login';
  });

  return divElement;
};
