import { registrarseFunction } from '../view-controller/view-register.js';

export default () => {
  const viewRegistro = `
    <div class="icon_info">
      <div ><i class="fas fa-info-circle" ></i></div>
        <header>
          <img class="logo" src="./imagenes/logo_oficial.png" >
        </header>
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
          <input type="text" class="usuario" placeholder="Usuario" required>
        </div> 
        <div class="input_contenedor">
          <i class="fas fa-envelope" class="icon_form"></i>
          <input type="text" class="correo" placeholder="Correo">
        </div>
        <div class="input_contenedor">
          <i class='fas fa-key' class="icon_form"></i>
          <input type="password" class="coontraseña"  placeholder= "Contraseña">
        </div>
        <input type="checkbox" id="condiiones">
        <label class="text_form"for="condiiones">Al registrarme acepto<strong><a href="#" class="terminos"> Terminos y Condiciones</a></strong></label>
        <br>
        <input type="button" class="boton_registrarse" value="Registrarme">
        <hr>
        <b><p>¿Ya tienes una cuenta? <a href="#" class="inicio_sesion">Inicia Sesion</a></p></b>
      </form>
      </section>
    </section>`;
  const divElement = document.createElement('div');
  divElement.id = 'segunda_vista_registro';
  divElement.innerHTML = viewRegistro;

  const btnRegistrarse = divElement.querySelector('.boton_registrarse');
  btnRegistrarse.addEventListener('click', registrarseFunction);

  return divElement;
};
