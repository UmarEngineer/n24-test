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

const netlify = require('gulp-netlify')
gulp.task('deploy', async function () {
  gulp.src('./dist/**/*')
    .pipe(netlify({
      site_id: '2d6359c1-3735-4664-a6ae-3f3a4406a44b',
      access_token: 'iwiquubxCf5evH58Avca4Hijxe9lk6y7lnhH1I9lvwY'
    }))
})

gulp.task('default', gulp.series('styles', 'deploy', 'scripts', 'watch'))