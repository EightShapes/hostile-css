const gulp = require('esds-build');

gulp.task('esds-hook:pre:build:all', () => {
  return gulp.src('../esds-hostile-css.css')
        .pipe(gulp.dest('./'));
});
