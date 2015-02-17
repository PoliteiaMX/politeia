'use strict';

/**
 * @ngdoc function
 * @name politeiaApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the politeiaApp
 */
angular.module('politeiaApp')
  .controller('OfficialCtrl', function ($rootScope, $scope, $routeParams, $http) {
    $http.get('data/officials/' + $routeParams.officialId + '.json')
      .then(function (response) {
        $scope.official = response.data;
      });
  });
