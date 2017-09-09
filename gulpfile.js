const gulp = require("gulp"),
  pkg = require("./package.json"),
  gutil = require("gulp-util"),
  marigold = require("marigold-build").setup(gulp, pkg),
  js = marigold.js( { entry: "src/index.js", sourceMap: false });


marigold.taskify([js]);
