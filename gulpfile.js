var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');


gulp.task('js', function(){

	browserify('./src/js/main.jsx')
		.transform(babelify, {presets: ['es2015', 'react']})
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('./dist'))
});