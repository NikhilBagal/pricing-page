const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

gulp.task('copyHtml', async function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function(){
  return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'))
})

gulp.task('watch', function(){
    gulp.watch('src/*.ts', gulp.series('scripts'));
})

gulp.task('default',gulp.parallel('copyHtml', 'scripts', 'watch'))