/**
 * Created by Administrator on 2017/9/28.
 */
var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');

gulp.task('connect', function () {
    connect.server({
        root: './',
        port: 8090,
        livereload: true
    });
});
gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
})
gulp.task('watch', function () {
    gulp.watch('./css/*.css', ['html']);
    gulp.watch('./js/*.js', ['html']);
    gulp.watch('./*.html', ['html']);
});
gulp.task('server', ['connect', 'watch']);
// 压缩css
gulp.task('mini-css', function () {
    gulp.src('./css/*.css')// 指定路径
        .pipe(concat('stylemain.css'))//读取合并
        .pipe(rename({suffix: ".min"}))
        .pipe(minifyCss())// 压缩
        .pipe(gulp.dest('./css'))
        .pipe(notify({messafe: 'ok'}))
}