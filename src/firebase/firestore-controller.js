export const getPosts = (callback) => {
  firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((postData) => {
      data.push(postData);
    });
    callback(data);
  });
};

export const getUsers = (email, cb) => {
  firebase.firestore().collection('users').doc(email).onSnapshot((querySnapshot) => {
    cb(querySnapshot.data());
  });
};
