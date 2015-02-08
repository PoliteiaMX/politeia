'use strict';

/**
 * @ngdoc filter
 * @name politicsApp.filter:nullFilter
 * @function
 * @description
 * # nullFilter
 * Filter in the politicsApp.
 */
angular.module('politicsApp')
  .filter('nullFilter', function () {
    return function (input) {
      return input === null ? '?' : input;
    };
  });
