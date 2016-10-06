'use strict';

const app = require('../app');

const signUp = function (data) {
  console.log('data is', data);
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data,
  });
};

const signIn = function (data) {
  console.log('data is', data);
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: data,
  });
};

module.exports = {
  signUp,
  signIn,
};
