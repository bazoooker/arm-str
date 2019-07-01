var gulp      	    = require('gulp'), // Подключаем Gulp
    sass            = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync     = require('browser-sync').create(); // Подключаем Browser Sync
    autoprefixer    = require('gulp-autoprefixer'); // Подключаем автопрефиксер
    // var concat      = require('gulp-concat');



gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
          baseDir: "distrib"
        },
        notify: true
    });

    gulp.watch("dev/**/*.scss", ['sass']);
    // gulp.watch("distrib/js/all.js", ['scripts']);
    gulp.watch("distrib/*.html").on('change', browserSync.reload);    
    // gulp.watch("distrib/js/*.js").on('change', browserSync.reload);    
});

// gulp.task('scripts', function() {
//   return gulp.src('distrib/js/*.js')
//     .pipe(concat('all.js'))
//     .pipe(gulp.dest('distrib/js'));
// });

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("dev/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 6 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("distrib/css"))
        .pipe(browserSync.stream())
});

gulp.task('default', ['serve']);







