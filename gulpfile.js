const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile Sass
gulp.task('sass', function () {
  return gulp
    .src(['src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest(['src/css']))
    .pipe(browserSync.stream());
});

// Watch & Serve
gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: './src',
  });
  // watch constantly sass files
  gulp.watch(['src/scss/*.scss'], ['sass']);
  // html files
  gulp.watch(['./*.html']).on('change', browserSync.reload);
  // php files
  gulp.watch(['./*.php']).on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);
