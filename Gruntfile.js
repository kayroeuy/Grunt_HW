module.exports = function(grunt){
    grunt.initConfig({
        concat: {
          js: {
            src: ['js/1.js', 'js/2.js'],
            dest: 'built/js/scrits.js',
          },
         css: {
            src: ['css/main.css', 'css/theme.css'],
            dest: 'built/css/style.css',
          },
        },
        watch: {
            js: {
              files: ['js/**/*.js'],
              tasks: ['concat'],
              
            },
            css: {
                files: ['css/**/*.css'],
                tasks: ['concat'],
                
              },
          },
      });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['concat','watch']);
};