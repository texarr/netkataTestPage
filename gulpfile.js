var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('assets/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle:'expanded', sourceComments: 'map'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets/css'));
});

gulp.task('default', ['sass'], function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch('assets/scss/**/*.scss', ['sass']);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('assets/scss/**/*.scss').on('change', browserSync.reload);
  gulp.watch('assets/*.js').on('change', browserSync.reload);
});
