var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

gulp.task('minify-css', function() {
    return gulp.src('css/cssutilities.css')
      .pipe(cleanCSS())
      .pipe(rename('cssutilities.min.css'))
      .pipe(gulp.dest('css'));
});