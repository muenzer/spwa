(function() {
  'use strict';
  angular.module('MenuApp')
  .controller('categoriesController', CategoriesController);

  CategoriesController.$inject = ['categories'];
  function CategoriesController(categories) {
    var cat = this;
    cat.categories = categories.data;
  }
}());
