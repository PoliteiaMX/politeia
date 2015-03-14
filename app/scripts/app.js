'use strict';

/**
 * @ngdoc overview
 * @name politeiaApp
 * @description
 * # politeiaApp
 *
 * Main module of the application.
 */
angular
  .module('politeiaApp', [
    'ui.router',
    'angularUtils.directives.dirDisqus',
    'angulartics',
    'angulartics.google.analytics'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/index.html',
        controller: 'IndexCtrl'
      })
      .state('appLayout', {
        abstract: true,
        templateUrl: 'views/app-layout.html'
      })
      .state('events', {
        parent: 'appLayout',
        url: '/events',
        templateUrl: 'views/event-index.html',
        controller: 'EventIndexCtrl'
      })
      .state('event', {
        parent: 'appLayout',
        url: '/events/:eventId',
        templateUrl: 'views/event.html',
        controller: 'EventCtrl'
      })
      .state('commitment-gallery', {
        parent: 'appLayout',
        url: '/events/:eventId/commitments/:commitmentIndex/gallery',
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl'
      })
      .state('gallery-item', {
        parent: 'appLayout',
        url: '/events/:eventId/commitments/:commitmentIndex/gallery/:itemId',
        templateUrl: 'views/gallery-item.html',
        controller: 'GalleryItemCtrl'
      })
      .state('officials', {
        parent: 'appLayout',
        url: '/officials',
        templateUrl: 'views/official-index.html',
        controller: 'OfficialIndexCtrl'
      })
      .state('official', {
        parent: 'appLayout',
        url: '/officials/:officialId',
        templateUrl: 'views/official.html',
        controller: 'OfficialCtrl'
      });
  });

// TODO(thewarpaint): Substitute this with an angular tooltip directive
$(function () {
  $('body').tooltip({
    selector: '[data-toggle="tooltip"]'
  });
});
