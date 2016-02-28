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
  gulp.src('./src/*.js')
  	.src('./demo/*.js')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch(['./*/*.js'], ['js']);
});


gulp.task('default', ['connect', 'watch']);