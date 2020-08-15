const fs = require("fs");
const path = require("path");

const del = require("del");

const gulp = require("gulp");
const sass = require("gulp-sass");
const livereload = require("gulp-livereload");

const theo = require("gulp-theo");

////////////////////////////////////////////////////////////////////
// Paths
////////////////////////////////////////////////////////////////////

const paths = {
  designTokens: "./tokens",
  generated: "./.generated",
  output: "./.www",
  styles: "./src/styles",
};

////////////////////////////////////////////////////////////////////
// Tasks - Clean
////////////////////////////////////////////////////////////////////

gulp.task("clean", () => del([paths.generated, paths.output]));

////////////////////////////////////////////////////////////////////
// Tasks - Design Tokens
////////////////////////////////////////////////////////////////////

gulp.task("styleguide", () =>
  gulp
    .src("./tokens/*.yml")
    .pipe(
      theo({
        transform: { type: "web" },
        format: { type: "html" },
      })
    )
    .pipe(gulp.dest(paths.generated))
    .pipe(livereload())
);

gulp.task(
  "tokens",
  gulp.series("styleguide", () =>
    gulp
      .src("./tokens/*.yml")
      .pipe(
        theo({
          transform: { type: "web" },
          format: { type: "scss" },
        })
      )
      .pipe(gulp.dest(paths.generated))
      .pipe(gulp.dest(paths.styles))
      .pipe(livereload())
  )
);

////////////////////////////////////////////////////////////////////
// Tasks - Site
////////////////////////////////////////////////////////////////////

gulp.task(
  "styles",
  gulp.series("tokens", () =>
    gulp
      .src("./src/styles/**/*.scss")
      .pipe(sass())
      .pipe(gulp.dest(paths.output))
      .pipe(livereload())
  )
);

gulp.task("html", () =>
  gulp.src("./src/index.html").pipe(gulp.dest(paths.output)).pipe(livereload())
);

////////////////////////////////////////////////////////////////////
// Tasks - Watch
////////////////////////////////////////////////////////////////////
gulp.task("dev", () => {
  require("./server");
});

gulp.task(
  "watch",
  gulp.series("dev", () => {
    livereload.listen({
      port: 35710,
    });
    gulp.watch("./tokens/**/*.yml", ["styles"]);
    gulp.watch("./src/**/*.scss", ["styles"]);
    gulp.watch("./src/**/*.html", ["html"]);
  })
);

// INIT

gulp.task(
  "default",
  gulp.series("clean", "styleguide", "styles", "html", "watch", (done) => {
    done();
  })
);
