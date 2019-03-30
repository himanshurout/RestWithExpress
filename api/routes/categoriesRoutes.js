'use strict';
module.exports = function(app) {
  var categoryList = require('../controllers/categoriesController');

  // Routes
  app.route('/categories')
    .get(categoryList.get_category_list);


  app.route('/categories/:categoryId')
    .get(categoryList.get_category_details);
};
