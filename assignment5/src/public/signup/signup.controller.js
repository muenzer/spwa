(function() {
  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', 'signupService'];
  function SignupController(MenuService, signupService) {
    var $ctrl = this;

    $ctrl.message = null;

    $ctrl.submit = function () {

    };
  }

}());
