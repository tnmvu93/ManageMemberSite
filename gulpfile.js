var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('run_html', function() {
	return gulp.src(['./src/*.html', './src/**/*.html'])
		.pipe(gulp.dest('./dest/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('run_js', function() {
	return gulp.src(['./src/*.js', './src/**/*.js'])
		.pipe(gulp.dest('./dest/'))
		.pipe(browserSync.reload({
			stream: true
		}));
})

gulp.task('run_css', function() {
	return gulp.src(['./src/*.css', './src/**/*.css'])
		.pipe(gulp.dest('./dest/'))
		.pipe(browserSync.reload({
			stream: true
		}));
})

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: './',
			index: 'dest/index.html'
		}
	});
});

gulp.task('default', ['run_html', 'run_js','run_css', 'browser-sync'], function() {
	gulp.watch(['./src/*.html', './src/**/*.html'], ['run_html']);
	gulp.watch(['./src/*.css', './src/**/*.css'], ['run_css']);
	gulp.watch(['./src/*.js', './src/**/*.js'], ['run_js']);
});