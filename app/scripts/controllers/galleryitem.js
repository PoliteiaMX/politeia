'use strict';

/**
 * @ngdoc function
 * @name politeiaApp.controller:GalleryItemCtrl
 * @description
 * # GalleryItemCtrl
 * Controller of the politeiaApp
 */
angular.module('politeiaApp')
  .controller('GalleryItemCtrl', function ($scope, $stateParams, $http) {
    $http.get('data/events/' + $stateParams.eventId + '.json')
      .then(function (response) {
        $scope.event = response.data;
        $scope.commitmentIndex = $stateParams.commitmentIndex;
        $scope.commitment = $scope.event.commitments[$scope.commitmentIndex - 1];
        $scope.galleryItem = _.findWhere($scope.commitment.gallery, { id: $stateParams.itemId });
        $scope.source = $scope.event.sources[$scope.galleryItem.source];
      });
  });
