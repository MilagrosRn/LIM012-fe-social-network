
// // formas de agregar el objeto
// localStorage.setItem('Nombre', 'Miguel Antonio');
// localStorage.Apellido = 'Márquez Montoya';
// // llamar el objeto
// const firstName = localStorage.getItem('Nombre');
// const lastName = localStorage.Apellido;
// // // eliminar datos
// // localStorage.removeItem(Apellido);
// // // limpiar todo el objeto
// // localStorage.clear();
// document.getElementById('prueba').innerHTML = (`Hola, mi nombre es ${firstName} ${lastName}`);
const db = firebase.firestore();
export const modificarPost = (_idPost, _description, _privacity, _imagenLink) => {
  db.collection('posts').doc(_idPost).update({
    description: _description,
    privacity: _privacity,
    imagenLink: _imagenLink,
  });
};
