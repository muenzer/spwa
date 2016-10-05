(function() {
  'use strict';
angular.module('NarrowItDownApp', []);

angular.module('NarrowItDownApp')
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('URL', 'https://davids-restaurant.herokuapp.com/menu_items.json');

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrow = this;

  narrow.found = [];

  narrow.isLoading = false;

  narrow.narrowItDown = function (searchTerm) {
    if(!searchTerm) {
      narrow.isEmpty = true;
      return;
    }

    narrow.isLoading = true;

    MenuSearchService.getMatchedMenuItems(searchTerm).then(function (result) {
      narrow.isLoading = false;
      narrow.found = result;

      if(narrow.found.length === 0) {
        narrow.isEmpty = true;
      } else {
        narrow.isEmpty = false;
      }
    });
  };

  narrow.remove = function (index) {
    console.log("remove: " + index);
    narrow.found.splice(index, 1);
  };
}

MenuSearchService.$inject = ["$http", "URL"];
function MenuSearchService($http, URL) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: URL
    });

    return response.then(function (result) {
      var foundItems = result.data.menu_items.filter(function(item) {
        return item.description.toLowerCase().includes(searchTerm.toLowerCase());
      });

      return foundItems;
    });
  };

}

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItem.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
  };

  return ddo;
}

}());
