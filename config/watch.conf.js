module.exports = {
    files: [
        'src/scss/**/*.scss',
        'src/js/**/*.js',
        'docs/src/**/*.hbs',
        'docs/css/*.scss',
        'docs/js/*.js',
        'examples/**/*',
        '!examples/**/*.css'
    ],
    tasks: ["dist"],
    options: {
        livereload: true
    }
};
