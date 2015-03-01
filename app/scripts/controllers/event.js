'use strict';

/**
* @ngdoc function
* @name politeiaApp.controller:EventCtrl
* @description
* # EventCtrl
* Controller of the politeiaApp
*/
angular.module('politeiaApp')
.controller('EventCtrl', function ($rootScope, $scope, $stateParams, $http, $location) {
  $scope.disqus = {
    shortname: 'politeiamx',
    identifier: null,
    title: null,
    url: null,
    ready: false
  };

  $http.get('data/events/' + $stateParams.eventId + '.json')
    .then(function (response) {
      var statusCount,
        statuses = [
          {
            'id': 'completed',
            'title': 'cumplidos'
          },
          {
            'id': 'failed',
            'title': 'incumplidos'
          },
          {
            'id': 'unknown',
            'title': 'desconocidos'
          },
          {
            'id': 'pending',
            'title': 'pendientes'
          }
        ],
        galleryTypes = {
          image: 'fa-picture-o',
          video: 'fa-youtube-play'
        };

      $scope.event = response.data;

      statusCount = _.countBy($scope.event.commitments, 'status');
      $scope.event.statusBreakdown = _.map(statuses, function (status) {
        status.count = statusCount[status.id] ? statusCount[status.id] : 0;
        return status;
      });

      // TODO(thewarpaint): Refactor this into a filter?
      _.each($scope.event.commitments, function (commitment) {
        if(commitment.gallery) {
          commitment.galleryCount = _.countBy(commitment.gallery, function (galleryItem) {
            return galleryTypes[galleryItem.type];
          });
        }
      });

      // TODO(thewarpaint): Refactor this into a service
      $scope.disqus.identifier = $scope.event.id;
      $scope.disqus.title = $scope.event.title;
      $scope.disqus.url = $location.absUrl();
      $scope.disqus.ready = true;
    });
});
