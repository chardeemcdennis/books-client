'use strict';

const app = require('../app');

//SIGN UP
const signUpSuccess = (data) => {
  console.log('Sign up success, user data is', data);
  $('#signUpModal').modal('hide');
  $('#signUpSuccessModal').modal('show');
};

const signUpFailure = (error) => {
  console.log('error is', error);
  return error;
};

const signInSuccess = (data) => {
  //Stores current user data into app.user
  app.user = data.user;
  console.log('Sign in success, user data is', data);
  //UI response to sign in
  //SHOW GET BOOKS BUTTON
  $('#get-books').show();
};

const signInFailure = (error) => {
  console.log('error is', error);
  return error;
};


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
};
