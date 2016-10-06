'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

const onGetBooks = (event) => {
 event.preventDefault();
 api.getBooks()
   .done(ui.onGetBooksSuccess)
   .fail(ui.failure);
};


const addHandlers = () => {
  $('body').on('click','#getBooksButton', onGetBooks);
 };

 module.exports = {
  addHandlers,
 };
