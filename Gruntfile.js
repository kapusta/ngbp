module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-angular-templates');

  // if you simply run 'grunt' these default tasks will execute, IN THE ORDER THEY APPEAR!
  grunt.registerTask('default', ['jshint', 'clean', 'babel', 'ngtemplates', 'concat', 'cssmin', 'copy']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['./src/js/**/*.js', './src/components/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      },
    },

    clean: {
      options: {
        force: true, // danger will robinson!
      },
      target: {
        files: [{
          expand: true,
          cwd: './www/',
          src: ['js/**', 'css/**', 'index.html'],
        }]
      }
    },

    babel : {
      options: {
        sourceMap: true,
        minified: true,
        presets: ['es2015'],
        plugins: ['angularjs-annotate']
      },
      ngbp: {
        files: {
          './tmp/ngbp.annotated.js':
          ['./src/js/ngbp.js', './src/js/**/*.js', './src/components/**/*.js']
        }
      }
    },

    // https://github.com/ericclemmons/grunt-angular-templates/blob/master/README.md
    ngtemplates:  {
      'ngbp': {
        cwd: 'src',
        src: [
          'components/**/*.html'
        ],
        dest: './tmp/ngbp-components.min.js',
        options: {
          standalone: false,
          prefix: '/',
          htmlmin: { // NOTE: disable this if anything breaks
            collapseWhitespace:             true,
            removeRedundantAttributes:      true,
            removeScriptTypeAttributes:     true,
            removeStyleLinkTypeAttributes:  true,
            keepClosingSlash:               true // needed for SVGs
          }
        }
      }
    },

    concat: {
      'ngbp': {
        // grab the uglified app and compiled templates
        src: ['<%= uglify.ngbp.dest %>', '<%= ngtemplates.ngbp.dest %>'],
        dest: './tmp/ngbp.min.js'
      }
    },

    /* (dest : src) */
    cssmin: {
      compress: {
        files: {
          './tmp/ngbp.min.css': ['./src/css/ngbp.css']
        }
      }
    },

    copy: {
      idx: {
        files: [
          {
            expand: false,
            src: ['./src/index.html'],
            dest: './www/index.html',
            filter: 'isFile'
          }
        ]
      },
      js: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              'tmp/ngbp.min.js',
              //'tmp/ngbp.uglified.js.map',
              'node_modules/angular-websocket/dist/angular-websocket.min.js',
              'node_modules/lodash/lodash.min.js'
            ],
            dest: './www/js/',
            filter: 'isFile'
          }
        ]
      },
      css: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['tmp/ngbp.min.css'],
            dest: './www/css/',
            filter: 'isFile'
          }
        ]
      }
    },

    watch: {
      everything: {
        files: "<%= './src/**/*' %>",
        tasks: ['default']
      },
    }
  });
};
