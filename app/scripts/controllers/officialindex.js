'use strict';

/**
 * @ngdoc function
 * @name politeiaApp.controller:OfficialIndexCtrl
 * @description
 * # OfficialIndexCtrl
 * Controller of the politeiaApp
 */
angular.module('politeiaApp')
  .controller('OfficialIndexCtrl', function ($scope, $http) {
    $scope.filter = {
      name: ''
    };

    $http.get('data/officials-index.json')
      .then(function (response) {
        $scope.officials = response.data;
      });
  });
