const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('serve', function() {
  return gulp.src('.').pipe(webserver({
    directoryListing: true,
    open: false
  }));
});
