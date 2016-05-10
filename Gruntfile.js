/**
 * Módulos GRUNT ambiente de desenvolvimento
 */
(function(){
    "use strict";
    module.exports = function (grunt) {
        var gruntConfig = {
            less: {
                development: {
                    options: {
                        compress: true
                    },
                    files: {
                        'css/main.min.css': ["desenvolvimento/css/main.less"]
                    }
                }
            },
            uglify: {
                options: {
                    preserveComments: false,
                    mangle: true,
                    report: 'gzip'
                },
                my_target: {
                    files: {
                        'js/main.min.js': [
                            'desenvolvimento/js/header.js',
                            'desenvolvimento/js/*/*.js',
                            'desenvolvimento/js/*/*/*.js',
                            'desenvolvimento/js/functions.js',
                            'desenvolvimento/js/controller.js',
                        ]
                    }
                }
            },
            watch : {
                dist : {
                    files : [
                        'desenvolvimento/js/**/*',
                        'desenvolvimento/css/**/*'
                    ],
                    tasks : [ 'uglify', 'less' ]
                }
            }
        };

        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');

        grunt.initConfig(gruntConfig);

        var keys  = Object.keys(gruntConfig);
        var tasks = [];
        var i = 1;

        for(i in keys){
            tasks.push(keys[i]);
        }

        grunt.registerTask('default', tasks);
        grunt.registerTask( 'w',['watch']);
    };

}());
