var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var merge = require('merge2');
var del = require('del');

var polymerPrefixes = ['iron', 'neon', 'paper', 'platinum', 'google', 'firebase']; // 'gold',
var regex = new RegExp('^(' + polymerPrefixes.join('|') + ')-');

// Clean output directory
gulp.task('clean', del.bind(null, ['.tmp', '.delete-me'], {dot: true}));

gulp.task('polymer-to-typescript', function() {
    return gulp.src([
//	'demo/js/elements/**/*.html',
        'bower_components/{' + polymerPrefixes.join('-,') + '-}*/**/*.html',
        '!bower_components/iron-doc-viewer/iron-doc-viewer.html',
        '!bower_components/iron-component-page/iron-component-page.html',
//'bower_components/neon-animation/neon-animatable-behavior.html',
//'bower_components/neon-animation/neon-animation-runner-behavior.html',
//'bower_components/paper-tooltip/paper-tooltip.html',
//'bower_components/paper-badge/paper-badge.html',
//'bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html',
//'bower_components/iron-a11y-announcer/iron-a11y-announcer.html',
//'bower_components/iron-form/iron-form.html',
//'bower_components/iron-form-element-behavior/iron-form-element-behavior.html',
        '!bower_components/**/{test,tests,demo}/**/*.html'
    ])
    .pipe($.crisper({scriptInHead: false}))
    .pipe($.if('*.html', $.replace(/^<html><head>|<\/head><body>|<\/body><\/html>/g, '')))
    .pipe($.if('*.html', 
      $.replace(/^<html><head>|<\/head><body>|<\/body><\/html>/g, ''),
      $.babel({"plugins": ["polymer-to-typescript", {
//        "useBehaviorDecorator": true
        }]})
    ))
    .pipe($.if('*.js', $.rename({
        //dirname: '.',
        extname: '.ts'
    })))
    // I couldn't figure out how to do this in Babel
    .pipe($.if('*.ts', $.replace(/module\n(\S+)\n/, 'module $1 ')))
    .pipe($.if('*.ts', $.replace(/^(\s*)((class|interface).*{)/m, '$1export $2')))
    //.pipe(gulp.dest(function(file) {
    //    var match = file.basename.match(regex);
    //    return '.tmp/typescript' + (match ? '/' + match[1] : '');
    //}));
    .pipe(gulp.dest('.tmp'));
});

gulp.task('typescript', function() {
    var tsResult = gulp.src('.tmp/**/*.ts')
	               .pipe($.typescript({
		           declaration: true,
                   //noExternalResolve: true,
                   target: 'ES6',
                   experimentalDecorators: true
		       }));


    return merge([
        tsResult.dts.pipe(gulp.dest('typings'))
        //tsResult.dts.pipe(gulp.dest(function(file) {
        //    var match = file.basename.match(regex);
        //    return 'Xtypings' + (match ? '/' + match[1] : '');
        //})),
        //tsResult.js.pipe(gulp.dest('.delete-me'))
    ]);
});

gulp.task('default', ['polymer-to-typescript', 'typescript']);

