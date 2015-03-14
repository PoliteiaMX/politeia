'use strict';

/**
 * @ngdoc function
 * @name politeiaApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the politeiaApp
 */
angular.module('politeiaApp')
  .controller('IndexCtrl', function ($scope) {
    // TODO(thewarpaint): Move to a JSON file?
    $scope.sections = [
      {
        id: 'events',
        title: 'Sucesos',
        description: 'Eventos destacados que vale la pena seguir, especialmente si se realizaron ' +
          'compromisos de parte de un funcionario o dependencia, o si son particularmente controversiales ' +
          'o poco atinados.',
        cover: {
          url: 'http://i.imgur.com/HWWefLX.jpg',
          author: 'Eneas De Troya',
          site: 'Flickr',
          sourceUrl: 'https://www.flickr.com/photos/eneas/4451588252'
        }
      },
      {
        id: 'officials',
        title: 'Funcionarios',
        description: 'Encuentra información sobre diversos servidores públicos, su carrera profesional y ' +
          'política, controversias en su trayectoria y formas de contactarlos.',
        cover: {
          url: 'http://i.imgur.com/o51zSJP.jpg',
          author: 'Antony Stanley',
          site: 'Flickr',
          sourceUrl: 'https://www.flickr.com/photos/antonystanley/2105552839'
        }
      }
    ];
  });
