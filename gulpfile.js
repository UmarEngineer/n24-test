const gulp = require('gulp');

const minify = require('gulp-minify')
const minifyCSS = require('gulp-minify-css')
const rename = require('gulp-rename')


gulp.task('styles', async function() {
    gulp.src('source/styles/**/*.css')
        .pipe(minifyCSS())
        // .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
})

gulp.task('scripts', async function () {
    gulp.src(['source/js/**/*.js'])
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('dist/js'))
})

gulp.task('watch', async function () {
    gulp.watch('source/js/**/*.js', gulp.series('scripts'))
    gulp.watch('source/styles/**/*.css', gulp.series('styles'))
})

gulp.task('default', gulp.series('styles', 'scripts', 'watch'))