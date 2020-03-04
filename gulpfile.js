var gulp = require('gulp');
var exec = require('child_process').exec;


gulp.task('test', function (cb) {
  exec('ng test', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})
