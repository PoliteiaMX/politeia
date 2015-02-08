'use strict';

/**
* @ngdoc function
* @name politicsApp.controller:EventCtrl
* @description
* # EventCtrl
* Controller of the politicsApp
*/
angular.module('politicsApp')
.controller('EventCtrl', function ($rootScope, $scope, $routeParams, $http) {
  $http.get('data/events/' + $routeParams.eventId + '.json')
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
        ];

      $scope.event = response.data;

      statusCount = _.countBy($scope.event.commitments, 'status');
      $scope.event.statusBreakdown = _.map(statuses, function (status) {
        status.count = statusCount[status.id] ? statusCount[status.id] : 0;
        return status;
      });
    });
});
