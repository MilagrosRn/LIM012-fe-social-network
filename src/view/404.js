export default () => {
  const vista404 = `
  <section class="vista404">
  <div class="header404">
  <img class="logo404" src="../imagenes/logo_oficial.png">
  </div>
  <div class = "text404">
    <h1 class= "error404">404</h1>
  <h2 class= "errortext404">Vista no encontrada, verifique y vuelva a intentarlo</h2>
  </div>
  </section>
    `;

  const divElement = document.createElement('div');
  divElement.innerHTML = vista404;

  return divElement;
};
