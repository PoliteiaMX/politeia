'use strict';

/**
 * @ngdoc function
 * @name politeiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the politeiaApp
 */
angular.module('politeiaApp')
  .controller('MainCtrl', function ($scope, $state) {
    $scope.$state = $state;
  });
