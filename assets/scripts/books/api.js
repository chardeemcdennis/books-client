'use strict';

const app = require('../app.js');

let getBooks = function(){
 return $.ajax({
   url: app.host + "/books", // "http://book-json.herokuapp.com/books"
   method: 'GET',
   headers: {
     Authorization: 'Token token=' + app.user.token,
   },
   // dataType: 'json'
 });
};


module.exports = {
  getBooks
};
