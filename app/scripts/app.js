'use strict';

/**
 * @ngdoc overview
 * @name politicsApp
 * @description
 * # politicsApp
 *
 * Main module of the application.
 */
angular
  .module('politicsApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/events/:eventId', {
        templateUrl: 'views/event.html',
        controller: 'EventCtrl'
      })
      .when('/officials/:officialId', {
        templateUrl: 'views/official.html',
        controller: 'OfficialCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
