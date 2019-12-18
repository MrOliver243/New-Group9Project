'use strict';

const {src, dest, watch, series, parallel} = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const gulp = require('gulp');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

const files = {
  scssPath: './src/Assets/scss/**/*.scss',
  cssPath:  './src/Assets/css'
}

function scssTask() {
  return src(files.scssPath)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([ autoprefixer(), cssnano() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(files.cssPath));
}

function watchTask() {
  watch(files.scssPath, series(scssTask));
}

exports.default = series(
  series(scssTask),
  watchTask
);
