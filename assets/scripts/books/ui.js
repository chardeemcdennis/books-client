'use strict';

const showBooksTemplate = require('../templates/books-listing.handlebars');

const onGetBooksSuccess = () => {
 $('.content').html(showBooksTemplate());
};

module.exports = {
  onGetBooksSuccess
};
