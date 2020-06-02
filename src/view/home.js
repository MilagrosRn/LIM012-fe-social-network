export default () => {
  const viewHome = `
  <div id="tercera_vista_home">
  <header class="header_navigation_home">
    <div class="conteiner_menu">
      <hr class="menu">
      <hr class="menu">
      <hr class="menu">
    </div>
    <div class="conteiner_logo">
      <img class="header_logo" src="./imagenes/logo_oficial.png" >
    </div>
  </header>
  <section class="post">
    <div class="title_user">
      <figure class="data_user">
        <div class="img_user"></div>
          <div class="name_user">
          <h2>PELUCHA REYNA</h2>
          <h3>hace dos minutos</h3>
        </div>
      </figure>
      <div class="menu_privacity_user">
        <div class="icon_privacity"><i class="fas fa-lock"></i></div>
        <div class="icon_privacity"><i class="fas fa-globe-americas"></i></div>
      </div>
    </div>
    <div class="description_post">
      <div class="description_text">
      <p class="text_post">¿Qué estas pensando?</p>
      <div class="button_send"><i class="fas fa-paper-plane"></i></div>
      </div>
    </div>
    <div  class="options_post">
      <div class="option">
        <i class="fas fa-camera"></i>
        <p>Foto</p>
      </div>
      <div class="option">
        <i class="fas fa-heart"></i>
        <p>Estado</p>
      </div>
      <div class="option2">
        <i class="fas fa-map-marker-alt"></i>
        <p>Estoy aquí</p>
      </div>
    </div>
  </section>
</div>
`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;
  return divElement;
};
