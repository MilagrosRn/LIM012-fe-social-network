// trae elementos de la coleccion de post en firebase
export const getPosts = (data) => {
  if (data.length) {
    const datosHTML = '';
    data.forEach((element) => {
      const liPost = `
        <li>
            <h3>${element.title}<h3>
            <p>${element.descrip}</p>
            
        </li>
        `;
    });
  }
};
