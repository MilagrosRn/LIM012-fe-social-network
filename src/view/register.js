// eslint-disable-next-line import/no-cycle
import { registerIn } from '../view-controler/viewc-register.js';
// eslint-disable-next-line import/no-cycle
import { btnInfo } from '../view-controler/view-info.js';

export default () => {
  const viewRegistro = `
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
          <br><h1>Registrate</h1><br>
          <div class="input_contenedor">
            <i class="fas fa-user"  class="icon_form"></i>
            <input type="text" id="usuario" class="usuario" placeholder="Usuario" required>
          </div> 
          <div class="input_contenedor">
            <i class="fas fa-envelope" class="icon_form"></i>
            <input type="text" id="correo" class="correo" placeholder="Correo" required>
          </div>
          <div class="input_contenedor">
            <i class='fas fa-key' class="icon_form"></i>
            <input type="password" id="contraseña" class="contraseña"  placeholder= "Contraseña" required>
          </div>
          <div id="msjError"></div>     
          <input type="checkbox" id="condiiones">
          <label class="text_form"for="condiiones">Al registrarme acepto<a href="#" class="terminos">Terminos y Condiciones</a></label>
          <br>
          <input type="button" class="boton_registrarse" value="Registrarme">
          <hr>
          <p class="text_form" >¿Ya tienes una cuenta? <a href="#" class="inicio_sesion" id="alerta">Inicia Sesion</a></p>
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
    </div>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewRegistro;

  const btnInformacion = divElement.querySelector('.info');
  btnInformacion.addEventListener('click', btnInfo);

  const btnIngresar = divElement.querySelector('.boton_registrarse');
  btnIngresar.addEventListener('click', registerIn);
  return divElement;
};
