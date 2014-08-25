#!/bin/sh

browserify -r ./src/lib/main.js:lib -o build/lib.js
browserify -e src/app/main.js -x lib -o build/app.js
