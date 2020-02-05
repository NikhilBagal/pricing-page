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
        .pipe(gulp.dest('dist'))
})

gulp.task('watch', async function(){
    gulp.watch('src/*.ts', ['scripts']);
})

gulp.task('default',['copyHtml', 'scripts'])