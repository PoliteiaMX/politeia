'use strict';

/**
 * @ngdoc function
 * @name politeiaApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the politeiaApp
 */
angular.module('politeiaApp')
  .controller('GalleryCtrl', function ($scope, $stateParams, $http) {
    $http.get('data/events/' + $stateParams.eventId + '.json')
      .then(function (response) {
        $scope.event = response.data;
        $scope.commitmentIndex = $stateParams.commitmentIndex;
        $scope.commitment = $scope.event.commitments[$scope.commitmentIndex - 1];
        $scope.galleryItems = $scope.commitment.gallery;
      });
  });
