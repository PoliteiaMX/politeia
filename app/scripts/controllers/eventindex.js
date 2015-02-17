'use strict';

/**
 * @ngdoc function
 * @name politeiaApp.controller:EventindexCtrl
 * @description
 * # EventindexCtrl
 * Controller of the politeiaApp
 */
angular.module('politeiaApp')
  .controller('EventIndexCtrl', function ($scope, $http) {
    $scope.filter = {
      title: ''
    };

    $http.get('data/events-index.json')
      .then(function (response) {
        $scope.events = response.data;
      });
  });
