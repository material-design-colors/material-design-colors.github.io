/* Vars */
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    jsmin = require('gulp-jsmin'),
    jade = require('gulp-jade'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),

//optional
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');


/* Sources */
var src_js = 'sources/js/**/*.js',
    src_css = 'sources/css/**/*.css',
    src_html = 'sources/html/**/*.jade',
    src_img = 'sources/img/**/*';

var src_css_material = 'node_modules/material-design-lite/material.min.css',
    src_js_material = 'node_modules/material-design-lite/material.min.js';

var deps = {
    "clipboard": {
        "src": "node_modules/clipboard/dist/clipboard.min.js",
        "dest": "js"
    }
};


var browsers_ver = ['not ie <= 9', 'iOS > 7'];

/* Destination folder */
var DEST = 'build/';
var DEST_html = '';


/* Tasks */
gulp.task('default', ['build', 'watch']);

gulp.task('material', ['buildMaterial']);

gulp.task('buildHtml', ['reloadHtml']);

gulp.task('build', [
    'buildJs',
    'buildCss',
    'buildHtml',
    'buildImg',
    'buildMaterial',
    'copyDep'
]);


// Watch Files For Changes
gulp.task('watch', function () {
    livereload.listen(); //default web-server
    //livereload.listen(63342); //phpStorm web-server

    gulp.watch(src_js, ['reloadJs']);
    gulp.watch(src_css, ['reloadCss']);
    gulp.watch(src_img, ['reloadImg']);
    gulp.watch(src_html, ['reloadHtml']);
    gulp.watch(src_html, ['reloadImg']);
});

/* -------------------- Html */
//Reload
gulp.task('reloadHtml', function () {
    var YOUR_LOCALS = {};

    gulp.src(src_html)
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest(DEST_html))
        .pipe(livereload());
});

/* -------------------- JS */
//Reload
gulp.task('reloadJs', function () {
    gulp.src(src_js)
        .pipe(concat("js.min.js"))
        .pipe(gulp.dest(DEST + 'js'))
        .pipe(livereload());
});

//Build
gulp.task('buildJs', function () {
    gulp.src(src_js)
        .pipe(rename({suffix: '.min'}))
        .pipe(concat("js.min.js"))
        .pipe(jsmin())
        .pipe(gulp.dest(DEST + 'js'))
        .pipe(livereload());
});


/* -------------------- CSS */
//Reload
gulp.task('reloadCss', function () {
    gulp.src(src_css)
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest(DEST + 'css'))
        .pipe(livereload());
});

//Build
gulp.task('buildCss', function () {
    gulp.src(src_css)
        .pipe(autoprefixer({
            browsers: browsers_ver,
            cascade: false
        }))
        .pipe(concat("style.min.css"))
        .pipe(cssmin())
        .pipe(gulp.dest(DEST + 'css'))
        .pipe(livereload());
});

gulp.task('buildMaterial', function () {
    gulp.src(src_css_material)
        .pipe(gulp.dest(DEST + 'material'))
        .pipe(livereload());
    gulp.src(src_js_material)
        .pipe(gulp.dest(DEST + 'material'))
        .pipe(livereload());
});

gulp.task('copyDep', function () {
    gulp.src(deps.clipboard.src)
        .pipe(gulp.dest(DEST + deps.clipboard.dest))
        .pipe(livereload());
});


/* -------------------- Images */
//Reload
gulp.task('reloadImg', ['buildImg']);

//Build
gulp.task('buildImg', function () {
    gulp.src(src_img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(DEST + 'img'))
        .pipe(livereload());
});


