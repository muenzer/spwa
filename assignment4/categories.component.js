(function() {
  'use strict';
  angular.module('MenuApp')
  .component('categories',{
    bindings: {
      myCategories: '<'
    },
    templateUrl: 'categories.template.html'
  });
}());
