#!/usr/bin/env node
'use strict';

var fs = require('fs'),
    glob = require('glob'),
    _ = require('underscore');

var IndexGenerator = {
  main: function () {
    var officials,
        events,
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

    glob('app/data/officials/*.json', function (error, files) {
      officials = files.map(function (filename) {
        var official = JSON.parse(fs.readFileSync(filename, 'utf8'));

        return {
          id: official.id,
          name: official.name,
          description: official.description,
          avatarUrl: official.avatarUrl
        };
      });

      officials.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });

      fs.writeFile('app/data/officials-index.json', JSON.stringify(officials, null, 2));
    });

    glob('app/data/events/*.json', function (error, files) {
      events = files.map(function (filename) {
        var item,
            event = JSON.parse(fs.readFileSync(filename, 'utf8')),
            statusCount = _.countBy(event.commitments, 'status');

        item = {
          id: event.id,
          title: event.title,
          photoUrl: event.photoUrl
        };

        if(!_.isEmpty(statusCount)) {
          item.statusBreakdown = _.map(statuses, function (status) {
            return {
              id: status.id,
              count: statusCount[status.id] ? statusCount[status.id] : 0
            };
          });
        }

        return item;
      });

      events.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });

      fs.writeFile('app/data/events-index.json', JSON.stringify(events, null, 2));
    });
  }
};

IndexGenerator.main();
