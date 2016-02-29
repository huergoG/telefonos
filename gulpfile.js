var gulp = require('gulp'),
 connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./demo/*.html')
    .pipe(connect.reload());
});
gulp.task('js', function () {
  gulp.src(['./src/*.js','./demo/*.js'])
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./demo/*.html'], ['html']);
  gulp.watch(['./src/*.js','./demo/*.js'], ['js']);
});


gulp.task('default', ['connect', 'watch']);

/*
var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    gp_sourcemaps = require('gulp-sourcemaps');

gulp.task('js-fef', function(){
    return gulp.src(['file1.js', 'file2.js', 'file3.js'])
        .pipe(gp_sourcemaps.init())
        .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_rename('uglify.js'))
        .pipe(gp_uglify())
        .pipe(gp_sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js-fef'], function(){});
*/