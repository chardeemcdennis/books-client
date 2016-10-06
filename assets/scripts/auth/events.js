'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onSignUpClick = function () {
  ui.showSignUpModal();
};

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.signUpfailure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInFailure);
};



const addHandlers = function() {
  $('#sign-up-link').on('click', onSignUpClick);
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
};

module.exports = {
  addHandlers
};
