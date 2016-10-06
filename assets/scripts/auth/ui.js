'use strict';

const app = require('../app');

//SIGN UP
const signUpSuccess = () => {
  $('#signUpModal').modal('hide');
  $('#signUpSuccessModal').modal('show');
};

const signUpFailure = (error) => {
  return error;
};

const signInSuccess = (data) => {
  //Stores current user data into app.user
  app.user = data.user;

  //UI response to sign in
  //SHOW GET BOOKS BUTTON
  $('#get-books').show();
};

const signInFailure = (error) => {
  return error;
};

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
};
