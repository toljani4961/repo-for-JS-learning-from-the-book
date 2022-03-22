const gulp = require("gulp");
const babel = require("gupl-babel");

gulp.task("default", function () {
  gulp.src("es6/**/*.js").pipe(babel()).pipe(gulp.dest("dist"));

  gupl.src("puclic/es6/**/*.js").pipe(babel()).pipe(gulp.dest("public/dist"));
});
