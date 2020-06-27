const firebaseStorage = () => ({
  ref: path => ({
    put: file => new Promise((resolve) => {
      resolve('se subio al storage');
    }),
    delete: () => new Promise((resolve) => {
      resolve('se borro del storage');
    }),
  }),
});
const firebase = {
  storage: firebaseStorage,
};
export default jest.fn(() => firebase);
