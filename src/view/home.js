export default () => {
  const viewRegistro = '<div><p>HOLA</p></div>';
  const divElement = document.createElement('div');
  // divElement.setAtribute('id', 'segunda_vista_registro');
  divElement.innerHTML = viewRegistro;
  return divElement;
};
