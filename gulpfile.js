var gulp = require("gulp");  
var babel = require("gulp-babel");
var watch = require("gulp-watch");  

gulp.task("babeljs", function(){
  return gulp.src(['./src/*.js','./src/**/*.es','!./src/public/*/*.es'])
  .pipe(babel({
    presets:['es2015']
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task("default",['babeljs'], function(){
  gulp.watch(['./src/*.js','./src/**/*.es','!./src/public/*/*.es'], ['babeljs']);
}); 