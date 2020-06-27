const firebaseFirestore = () => ({
  collection: name => ({
    doc: gmailUser => ({
      set: objDoc => new Promise((resolve) => {
        resolve(`se creo usuario ${gmailUser}`);
      }),
      update: objDoc => new Promise((resolve) => {
        resolve('se actualizo documento');
      }),
    }),
    add: objDoc => new Promise((resolve) => {
      resolve('se creo un documento en coleccion');
    }),
  }),
});
const firebase = {
  firestore: firebaseFirestore,
};
export default jest.fn(() => firebase);
