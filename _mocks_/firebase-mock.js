/* eslint-disable import/no-extraneous-dependencies */
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mocksdk = new firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth.autoFlush(),
);
export { mocksdk };
