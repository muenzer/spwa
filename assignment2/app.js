(function () {
'use strict';

angular.module('ShoppingListCheckOff', []);

angular.module('ShoppingListCheckOff')
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;
  list.items = ShoppingListCheckOffService.getToBuy();
  list.bought = ShoppingListCheckOffService.bought;

  list.emptyMessage = "Everything is bought!";
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;
  list.items = ShoppingListCheckOffService.getBought();

  list.emptyMessage = "Nothing bought yet";
}

function ShoppingListCheckOffService() {
  var service = this;

  // Initial list of shopping items
  var tobuy = [
    {
      name: "Leer Jets",
      quantity: 2
    },
    {
      name: "Hot Air Balloons",
      quantity: 5
    },
    {
      name: "Space Shuttles",
      quantity: 3
    },
    {
      name: "Titanic",
      quantity: 1
    },
    {
      name: "F1 Cars",
      quantity: 10
    }
  ];

  // List of bought items
  var bought = [];

  service.bought = function (index) {
    var item = tobuy[index];

    tobuy.splice(index, 1);
    bought.push(item);
  };

  service.getToBuy = function () {
    return tobuy;
  };

  service.getBought = function () {
    return bought;
  };
}



})();
