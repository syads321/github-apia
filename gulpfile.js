var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var ngHtml2Js = require("gulp-ng-html2js");

var libsjs = [
    './lib/jquery/jquery.min.js',
    './lib/bootstrap/js/bootstrap.min.js',
    './lib/angular/angular.min.js',
    './lib/angular/angular-route.min.js',
    './lib/angular-animate/angular-animate.min.js',
    './lib/angular-loading-bar/loading-bar.js'
]

var jsorigin = [
    './js/*.js',
    './js/*/*.js'
]
var csorigin = [
    './scss/*.scss'
]
var jsdest = './app/js/';
var cssdest = './app/css/';
var mergeJs = function() {
    console.log('mergejs')
    gulp.src(libsjs.concat(jsorigin))
        .pipe(concat('scripts.js'))
        //        .pipe(uglify({preserveComments: 'some', mangle: false})) // Keep some comments
        .pipe(gulp.dest(jsdest));
}
gulp.task('spminify', mergeJs);

gulp.task('scss', function() {
    gulp.src(csorigin)
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest(cssdest));
})

gulp.task('html', function() {
    gulp.src(['./template/*.html'])
        .pipe(ngHtml2Js({
            moduleName: "app",
            prefix: "templates/"
        }))
        .pipe(concat("partials.min.js"))
        //    .pipe(uglify())
        .pipe(gulp.dest("./js")).on('end', mergeJs);
})

gulp.task('watch', function() {
    gulp.watch('./js/*.js', ['spminify']);
    gulp.watch('./js/*/*.js', ['spminify']);
    gulp.watch('./scss/*.scss', ['scss']);
    gulp.watch('./template/*.html', ['html']);
});