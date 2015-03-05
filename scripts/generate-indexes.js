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
        var official = JSON.parse(fs.readFileSync(filename, 'utf8')),
            whitelist = ['id', 'name', 'description', 'avatarUrl'];

        return _.pick(official, whitelist);
      });

      officials.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });

      fs.writeFile('app/data/officials-index.json', JSON.stringify(officials, null, 2));
    });

    glob('app/data/events/*.json', function (error, files) {
      events = files.map(function (filename) {
        var event = JSON.parse(fs.readFileSync(filename, 'utf8')),
            statusCount = _.countBy(event.commitments, 'status'),
            whitelist = ['id', 'title'],
            item = _.pick(event, whitelist);

        item.coverUrl = event.cover.url;

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
