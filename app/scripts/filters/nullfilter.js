'use strict';

/**
 * @ngdoc filter
 * @name politeiaApp.filter:nullFilter
 * @function
 * @description
 * # nullFilter
 * Filter in the politeiaApp.
 */
angular.module('politeiaApp')
  .filter('nullFilter', function () {
    return function (input) {
      return input === null ? '?' : input;
    };
  });
