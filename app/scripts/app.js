'use strict';

/**
 * @ngdoc overview
 * @name politeiaApp
 * @description
 * # politeiaApp
 *
 * Main module of the application.
 */
angular
  .module('politeiaApp', [
    'ngAnimate',
    'ngRoute',
    'angularUtils.directives.dirDisqus',
    'angulartics',
    'angulartics.google.analytics'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/events', {
        templateUrl: 'views/event-index.html',
        controller: 'EventIndexCtrl'
      })
      .when('/events/:eventId', {
        templateUrl: 'views/event.html',
        controller: 'EventCtrl'
      })
      .when('/officials', {
        templateUrl: 'views/official-index.html',
        controller: 'OfficialIndexCtrl'
      })
      .when('/officials/:officialId', {
        templateUrl: 'views/official.html',
        controller: 'OfficialCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
