angular.module('GSTApp').config(['$routeProvider', '$locationProvider', '$urlRouterProvider', '$stateProvider', function ($routeProvider, $locationProvider, $urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'view/home.html',
      controllerAs: 'HomeCtrl',
      controller: 'homeController'
    })
    $locationProvider.html5Mode(false);
  $locationProvider.hashPrefix('');
}]);
