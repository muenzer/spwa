(function () {
'use strict';

angular.module('LunchCheck', []);

angular.module('LunchCheck').controller('GreetingController', GreetingController);

GreetingController.inject = ['$scope'];

function GreetingController($scope) {
  $scope.message = "";

  $scope.check = function() {
    var n = count($scope.lunch);

    if(n === 0) {
      $scope.message = "Please enter data first";
    } else if (n <= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  };
}

function count(lunch) {
  if(typeof(lunch) == "undefined") {
    return 0;
  }
  var lunchArray = lunch.split(",");
  return lunchArray.length;
}

})();
