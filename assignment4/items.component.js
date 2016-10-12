(function() {
  'use strict';
  angular.module('MenuApp')
  .component('items',{
    bindings: {
      myItems: '<'
    },
    templateUrl: 'items.template.html'
  });
}());
