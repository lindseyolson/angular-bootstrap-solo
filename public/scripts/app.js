var app = angular.module('routeApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider.when ('/', {
    templateUrl: 'views/partials/michelangelo.html',
    controller: 'DefaultController as dc'
  }).when('/donatello', {
    templateUrl: '/views/partials/donatello.html',
    controller: 'DefaultController as dc'
  }).when ('/leonardo', {
    templateUrl: 'views/partials/leonardo.html',
    controller: 'DefaultController as dc'
  }).when ('/raphael', {
    templateUrl: 'views/partials/raphael.html',
    controller: 'DefaultController as dc'
  }).when ('/michelangelo', {
    templateUrl: 'views/partials/michelangelo.html',
    controller: 'DefaultController as dc'
  });
});

app.controller('DefaultController', DefaultController);

function DefaultController() {
  console.log('DefaultController is loaded');
}
