const subirAlStorage = (_file, _uid) => {
  const refStorage = firebase.storage().ref(`imagesUsers/${_uid}/${_file.name}`);
  const task = refStorage.put(_file);
  return task;
};

const eliminarStorage = (_uid, _file) => {
  const desertRef = firebase.storage().ref(`imagesUsers/${_uid}/${_file.nombre}`);
  return desertRef.delete();
};

export { subirAlStorage, eliminarStorage };
