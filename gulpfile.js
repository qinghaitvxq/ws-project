var gulp=require('gulp');
var less=require('gulp-less');
var concat=require('gulp-concat');
var minifyCss=require('gulp-minify-css');
var autoprefixer=require('gulp-autoprefixer');
var imagemin=require('gulp-imagemin');
var uglify=require('gulp-uglify');
var rename=require('gulp-rename');
var validator=require('gulp-html');

//
// gulp.task('css',function () {
//     gulp.src(['style/layout.css','style/color.css'])
//         .pipe(autoprefixer())
//         .pipe(concat('main.css'))
//         .pipe(gulp.dest('style'))
//         .pipe(concat('main-min.css'))
//         .pipe(minifyCss())
//         .pipe(gulp.dest('style'));
//
// });
//
// gulp.task('image',function() {
//     gulp.src('images/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/images'))
// });
//
// gulp.task('js',function () {
//     gulp.src('script/*.js')
//         .pipe(concat('main.js'))
//         .pipe(gulp.dest('script'))
//         .pipe(rename({suffix:'.min'}))
//         .pipe(uglify())
//         .pipe(gulp.dest('script'));
//
// });
//
// gulp.task('html',function () {
//     gulp.src('page/Login.html')
//         .pipe(gulp.dest('dist/page'));
// });


gulp.task('css',function () {
    gulp.src(['style/layout.css','style/color.css'])
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('delivery/style'))
        .pipe(concat('main-min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('delivery/style'));

});

gulp.task('image',function() {
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('delivery/images'))
});

gulp.task('js',function () {
    gulp.src('script/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('delivery/scripts'))
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('delivery/scripts'));

});

gulp.task('html',function () {
    gulp.src('page/flow_repo.html')
        .pipe(gulp.dest('delivery/pages'));
});

gulp.task('default',[],function (){
    gulp.start('css','js','image','html');
});
