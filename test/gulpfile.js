const gulp = require('esds-build');

gulp.task('esds-hook:post:build:all', () => {
  return gulp.src(['./dist/esds-hostile-css.css', './styles/esds-hostile-css.scss'])
        .pipe(gulp.dest('../'));
});
