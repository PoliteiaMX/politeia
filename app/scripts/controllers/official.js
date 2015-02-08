'use strict';

/**
 * @ngdoc function
 * @name politicsApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the politicsApp
 */
angular.module('politicsApp')
  .controller('OfficialCtrl', function ($rootScope, $scope, $routeParams, $http) {
    $http.get('data/officials/' + $routeParams.officialId + '.json')
      .then(function (response) {
        $scope.official = response.data;
      });
  });
