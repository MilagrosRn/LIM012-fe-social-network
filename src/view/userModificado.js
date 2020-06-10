export default (doc) => {
  const divUser = `
      <div class="divtop">
          <img src="${doc.image_port}" class="imagePortada">
          <center><img src="${doc.image_profile}" class="imagePerfile"></center>
          <center><p class="titulos">${doc.name_user}</p></center>
      </div>
      <div class="divbottom">
          <div class="divTitleLogo">
              <div><p class="titulos">Detalles</p></div>
          </div>
          <div class="divPEditar">
              <center><p class="editUser">${doc.ocupation}</p></center>
              <center><p class="editUser">${doc.location}</p></center>
              <center><p class="editUser">${doc.lenguaje}</p></center>
          </div>
          <div class="divInputEdit">
              <center><input type="text" class="editUser input_ocupation" value="${doc.ocupation}">
              <input type="text" class="editUser input_location" value="${doc.location}">
              <input type="text" class="editUser input_lenguaje" value="${doc.lenguaje}">
          </div>
      </div>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = divUser;

  return divElement;
};
