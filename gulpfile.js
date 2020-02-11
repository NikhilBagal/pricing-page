const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const nodemon = require('gulp-nodemon')

gulp.task('copyHtml', async function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function(){
  return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('src'))
})

gulp.task('imgMinify', function(){
    return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
})

gulp.task('uglify', function(){
    return gulp.src('src/index.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
})

gulp.task('sass', function(){
    return gulp.src('src/style/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('dist'))
})

gulp.task('start', function (done) {
    nodemon({
      script: 'dist/index.js'
    , ext: 'js html'
    , env: { 'NODE_ENV': 'development' }
    , done: done
    })
  })

gulp.task('watch', function(){
    gulp.watch('src/*.ts', gulp.series('scripts'));
    gulp.watch('src/style/*.scss', gulp.series('sass'));
    gulp.watch('src/*.js', gulp.series('uglify'));
    gulp.watch('src/index.html', gulp.series('copyHtml'));
    gulp.watch('src/images/*', gulp.series('imgMinify'));
})

gulp.task('default',gulp.parallel('copyHtml', 'scripts', 'imgMinify', 'watch', 'sass', 'uglify'))