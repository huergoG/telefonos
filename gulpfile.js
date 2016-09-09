var gulp = require('gulp'),
 connect = require('gulp-connect');
 gp_concat = require('gulp-concat'),
 gp_rename = require('gulp-rename'),
 gp_uglify = require('gulp-uglify'),
 gp_sourcemaps = require('gulp-sourcemaps');
 gd_del=require('del');
 
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

gulp.task('prep-dist',function(){
    return gd_del(['dist/**.*']);
});
gulp.task('js-dev', function(){
    return gulp.src(['./src/*.js'])
        .pipe(gp_sourcemaps.init())
        .pipe(gp_concat('telefonos.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));     
});
gulp.task('js-min',function(){
  return gulp.src(['./src/*.js'])
        .pipe(gp_concat('telefonos.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_rename('telefonos.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['connect', 'watch']);
gulp.task('build', ['prep-dist','js-dev','js-min'], function(){});
