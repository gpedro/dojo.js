var gulp = require('gulp'),
 jasmine = require('gulp-jasmine');

gulp.task('test', function () {
 
  return gulp.src('spec/**/*.js')
        .pipe(jasmine());

});

gulp.task('watch', function() {

  gulp.watch('src/**/*.js');
  gulp.watch('spec/**/*.js', ['test']);

});

gulp.task('default', ['watch', 'test']);
