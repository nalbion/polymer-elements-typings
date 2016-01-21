var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var merge = require('merge2');


gulp.task('polymer-to-typescript', function() {
    return gulp.src([
	'demo/js/elements/**/*.html',
        'bower_components/{iron-,paper-,neon-}*/**/*.html',
        '!bower_components/**/{test,demo}/**/*.html'
    ])
    .pipe($.crisper({scriptInHead: false}))
    .pipe($.if('*.html', $.replace(/^<html><head>|<\/head><body>|<\/body><\/html>/g, '')))
    .pipe($.if('*.html', 
      $.replace(/^<html><head>|<\/head><body>|<\/body><\/html>/g, ''),
      $.babel({"plugins": ["polymer-to-typescript", {
//        "useBehaviorDecorator": true
        }]})
    ))
    .pipe($.if('*.js', $.rename({extname: '.ts'})))
    .pipe(gulp.dest('out/typescript'));
});

gulp.task('typescript', ['polymer-to-typescript'], function() {
    var tsResult = gulp.src('out/typescript/**/*.ts')
	               .pipe($.typescript({
		           declaration: true
			   //noExternalResolve: true
		       }));
 
    return merge([
        tsResult.dts.pipe(gulp.dest('typings')),
        tsResult.js.pipe(gulp.dest('out/js'))
    ]);
});

gulp.task('default', ['polymer-to-typescript', 'typescript']);

