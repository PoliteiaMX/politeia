'use strict';

/**
 * @ngdoc function
 * @name politeiaApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the politeiaApp
 */
angular.module('politeiaApp')
  .controller('OfficialCtrl', function ($rootScope, $scope, $stateParams, $http) {
    $http.get('data/officials/' + $stateParams.officialId + '.json')
      .then(function (response) {
        $scope.official = response.data;
      });
  });
