'use strict';

var gulp = require('gulp');
var fcashTasks = require('fcash-build');

fcashTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
