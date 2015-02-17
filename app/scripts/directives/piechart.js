'use strict';

/**
 * @ngdoc directive
 * @name politeiaApp.directive:piechart
 * @description
 * # piechart
 */
angular.module('politeiaApp')
  .directive('piechart', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var width = 150,
            height = 150,
            radius = Math.min(width, height) / 2,
            svg,
            arc,
            pie,
            g;

        svg = d3.select(element[0])
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .append('g')
          .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

        arc = d3.svg.arc()
          .outerRadius(radius - 10)
          .innerRadius(0);

        pie = d3.layout.pie()
          .sort(function(d) { return d.count; })
          .value(function(d) { return d.count; });

        scope.$watch(attrs.data, function(newVal, oldVal) {
          if(newVal !== oldVal) {
            g = svg.selectAll('.arc')
              .data(pie(newVal))
              .enter().append('g')
              .attr('class', 'arc');

            g.append('path')
              .attr('d', arc)
              .attr('class', function(d) { return d.data.id; });
          }
        });
      }
    };
  });
