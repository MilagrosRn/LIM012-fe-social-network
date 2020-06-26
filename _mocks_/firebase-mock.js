/* eslint-disable import/no-extraneous-dependencies */
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mockfirestore = new firebasemock.MockFirestore();
const mockstorage = new firebasemock.MockStorage();
const mocksdk = new firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth.autoFlush(),
  () => mockfirestore.autoFlush(),
  () => mockstorage.autoFlush(),
);
// const { jest: requiredJest } = require('jest');

// jest.requiredJest.mock('../path-to-firebase-init', () => mocksdk);

export { mocksdk };
