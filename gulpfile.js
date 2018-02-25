var gulp = require("gulp");  
var babel = require("gulp-babel");
var rename = require("gulp-rename");
var watch = require("gulp-watch");  
      
gulp.task("babeljs", function () {  
return gulp.src("app.js")  
  .pipe(babel({
  	presets:['es2015']
  }))
  .pipe(rename({
    suffix: ".es"
  }))  
  .pipe(gulp.dest(""));  
});

gulp.task("babeljsConfig", function () {  
  return gulp.src("config/*.es")  
    .pipe(babel({
      presets:['es2015']
    }))
    .pipe(rename({
      extname: ".js"
    }))  
    .pipe(gulp.dest("config"));  
  });

gulp.task("babeljsControler", function () {  
  return gulp.src("controler/*.es")  
    .pipe(babel({
      presets:['es2015']
    }))
    .pipe(rename({
      extname: ".js"
    }))  
    .pipe(gulp.dest("controler"));  
  });

  gulp.task("babeljsModels", function () {  
    return gulp.src("models/*.es")  
      .pipe(babel({
        presets:['es2015']
      }))
      .pipe(rename({
        extname: ".js"
      }))  
      .pipe(gulp.dest("models"));  
    });

gulp.task("watch", function(){
  gulp.watch("app.js", ['babeljs']);
  gulp.watch("config/*.es", ['babeljsConfig']);
  gulp.watch("controler/*.es", ['babeljsControler']);
  gulp.watch("models/*.es", ['babeljsModels']);
}); 

gulp.task("default", ['watch', 'babeljs', 'babeljsConfig', 'babeljsControler','babeljsModels']);