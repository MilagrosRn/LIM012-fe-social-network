const firebaseFirestore = () => ({
  collection: name => ({
    doc: gmailUser => ({
      set: objDoc => new Promise((resolve) => {
        resolve(objDoc);
      }),
      update: objDoc => new Promise((resolve) => {
        resolve(objDoc);
      }),
      delete: () => new Promise((resolve) => {
        resolve('se borro documento');
      }),
    }),
    add: objDoc => new Promise((resolve) => {
      resolve(objDoc);
    }),
  }),
});
const firebase = {
  firestore: firebaseFirestore,
};
export default jest.fn(() => firebase);
