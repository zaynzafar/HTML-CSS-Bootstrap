
var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
    bootstrapDir: './node_modules/bootstrap-sass',
    publicDir: './',
};

gulp.task('css', function() {
    return gulp.src('./assets/css/app.scss')
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/assets/stylesheets'],
    }))
    .pipe(gulp.dest(config.publicDir + '/assets/css'));
});

gulp.task('default', ['css']);
