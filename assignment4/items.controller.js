(function() {
  'use strict';
  angular.module('MenuApp')
  .controller('itemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    var menu = this;
    menu.items = items.data.menu_items;
  }
}());
