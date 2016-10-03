var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('run_html', function() {
	return gulp.src(['./app/*.html', './app/**/*.html', '!./app/bower_components/**'])
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('run_js', function() {
	return gulp.src(['./app/*.js', './app/**/*.js', '!./app/bower_components/**'])
		.pipe(browserSync.reload({
			stream: true
		}));
})

gulp.task('run_css', function() {
	return gulp.src(['./app/*.css', './app/**/*.css', '!./app/bower_components/**'])
		.pipe(browserSync.reload({
			stream: true
		}));
})

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: './',
			index: 'app/index.html'
		}
	});
});

gulp.task('default', ['run_html', 'run_js','run_css', 'browser-sync'], function() {
	gulp.watch(['./app/*.html', './app/**/*.html'], ['run_html']);
	gulp.watch(['./app/*.css', './app/**/*.css'], ['run_css']);
	gulp.watch(['./app/*.js', './app/**/*.js'], ['run_js']);
});