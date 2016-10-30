(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'http://muenzer-spwa.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
