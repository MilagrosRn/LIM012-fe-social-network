export const getPosts = (callback) => {
  firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((postData) => {
      //   console.log(postData.data());
      data.push(postData.data());
    });
    callback(data);
  });
};

export const getUsers = (email, cb) => {
  firebase.firestore().collection('users').doc(email).get()
    .then((dataUsers) => {
      cb(dataUsers.data());
    });
};
