'use strict'

var del = require('del')
var gulp = require("gulp");
var gulpif = require("gulp-if")
var minifyCss = require('gulp-minify-css')
var zip = require('gulp-zip')
var change = require('gulp-change')

gulp.task('clean-chrome', (cb) => {
    return del(['chrome', 'chrome.zip'])
})

gulp.task('release', (cb) => {
    let cssFilter = function (file) {
        if (file.path.match(/\.css$/)) {
            return true
        }
    }
    return gulp.src([
        'css/**/*.*',
        'images/**/*.*',
        'js/**/*.*',
        'manifest.json',
        'options.html'
    ], {base: './'})
        .pipe(gulpif(cssFilter, minifyCss()))
        .pipe(gulp.dest('chrome'))
        .pipe(zip('chrome.zip'))
        .pipe(gulp.dest('.'))
})

gulp.start('extract-files')