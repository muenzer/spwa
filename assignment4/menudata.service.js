angular.module('data')
.service('MenuDataService', MenuDataService)
.constand('URL', 'https://davids-restaurant.herokuapp.com/');

MenuDataService.$inject = ['URL', '$http'];
function MenuDataService(URL, $http) {
  var service = this;

  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: URL + "/categories.json"
    });

    return response;
  };

  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: URL + "/menu_items.json",
      params: {category: categoryShortName}
    });

    return response;
  }
}
