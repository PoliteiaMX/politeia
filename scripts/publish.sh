#!/usr/bin/env bash
grunt build
mkdir dist/data && cp -R app/data/* dist/data
mkdir dist/fonts && cp bower_components/font-awesome/fonts/* dist/fonts
