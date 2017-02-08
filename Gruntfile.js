/**
 * Created by harshilkumar on 1/25/17.
 */

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });
    grunt.config.merge({
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: false
            }
        }
    });
    grunt.config.merge({
        watch: {
            karma: {
                files: ['test/*.js'],
                tasks: ['karma:unit:run'] //NOTE the :run flag
            },
            jshint: {
                files: ['app/*.js', 'test/*.js', 'Gruntfile.js', 'karma.conf.js'],
                tasks: ['jshint'] //NOTE            the :run flag
            }
        }
    });
    grunt.config.merge({
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dest_file:{
                files: {
                    'dest/scripts/errornicon.min.js': ['app/errorIcon.js'],
                }
            }
        }
    });

    grunt.config.merge({
        sass: {
            dist: {
                files: {
                    'dest/css/main.css': 'scss/main.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('sass2css', ['sass']);
    grunt.registerTask('unit_test',['karma']);
    grunt.registerTask('default', ['uglify', 'unit_test', 'watch:jshint']);
};