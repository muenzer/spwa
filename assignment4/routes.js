(function() {
  'use strict';
  angular.module('MenuApp')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.template.html'
    })
    .state('categories', {
      url: '/categories',
      template: '<categories my-categories="cat.categories"></categories>',
      controller: 'categoriesController as cat',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/items/{categoryShortName}',
      template: '<items my-items="menu.items"></items>',
      controller: 'itemsController as menu',
      resolve: {
        items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });

  });

}());
