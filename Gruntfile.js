module.exports = function(grunt) {

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);
  
  // Project configuration.
  grunt.initConfig({
    clean: {
      build: {
        src: [ "build" ]
      },
      images: {
        src: [ "build/**/*.{png,jpg,gif}" ]
      }
    },
    copy: {
      build: {
        cwd: 'src',
        src: [ '**', '!**/*.styl', '!**/*.jade','!**/*.md', '!**/_*', '!vendors/**/*.js' ],
        dest: 'build',
        expand: true
      },
      images: {
        cwd: 'src',
        src: [ '**/*.{png,jpg,gif,svg}' ],
        dest: 'build',
        expand: true
      },
      scripts: {
        cwd: 'src',
        src: [ '**/*.js' ],
        dest: 'build',
        expand: true
      },
    },
    jade: {
      compile: {
        options: {
          pretty: false,
          data: function(dest, src) {
            console.log("dest:" + dest);
            console.log("src:" + src);
            // Return an object of data to pass to templates
            //return require('./locals.json');
          },
          filters: {
            plain: function(block) {
              return block
            }
          }
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: [ '*.jade', '!_*.jade' ],
          dest: 'build',
          ext: '.html'
        }]
      }
    },
    stylus: {
      build: {
        options: {
          linenos: true,
          "include css": true,
          use: [
          require('autoprefixer-stylus'),
          require('rupture'),
          require('jeet')
          ],
          compress: true
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: [ '**/*.styl', '!**/_*.styl' ],
          dest: 'build/',
          ext: '.css'
        }]
      }
    },
  cssmin: {
    target: {
      files: [{
        expand: true,
        cwd: 'build/',
        src: ['css/*.css', '!*.min.css'],
        dest: 'build/',
        ext: '.css'
      }]
    }
  },
    htmlmin: {                                     // Task
      dist: {     
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true,
          keepClosingSlash:true
        },                                 // Target
        files: {                                   // Dictionary of files
          'build/index-critical.html': 'build/index-critical.html',     // 'destination': 'source'
        }
      }
    },

  imagemin: {    
    images:{                     // Task
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'src/',                   // Src matches are relative to this path
        src: ['img/**/*.{png,jpg,gif,svg}'],   // Actual patterns to match
        dest: 'build/'                  // Destination path prefix
      }]
    }
  },
  svg2png: {
        all: {
            files: [
                { cwd: 'src/', src: ['**/*.svg'], dest: 'src/img/png/' }
            ]
        }
  },
  concat: {
      dist: {
        src: [
        'src/vendors/profile.js',
        'src/vendors/jquery.js',
        'src/vendors/scrollreveal.js',
        'src/vendors/particles.js',
        'src/vendors/typed.min.js',
        'src/vendors/TweenMax.js',
        'src/js/main.js'
        ],
        dest: 'src/js/min/main.min.js',
      }
  },
  uglify:{
    dist:{
      files:{
        'src/js/min/main.min.js' : 'src/js/min/main.min.js'
      }
    }
  },
  critical: {
    test: {
        options: {
            base: './',
            minify: true,
            css: [
                'build/css/style.css'
            ],
            width: 1270,
            height: 900
        },
        src: 'build/index.html',
        dest: 'build/index-critical.html'
    }
  },
  connect: {
    dev: {
      options: {
        port: 9000,
        livereload: true,
        hostname: '0.0.0.0',
        base: 'build',
        open: true,
        middleware: function(connect, options, middlwares) {
          return [
          connect.static(options.base[0]),
          require('connect-livereload')()
          ];
        }
      }
    }
  },
  watch: { 
    options: {
      livereload: true
    },
    styles: {
      files: 'src/**/*.styl',
      tasks: [ 'stylus:build' ]
    },
    scripts: {
      files: ['src/**/*.js','src/**/*.json'],
      tasks: [ 'copy:scripts' ]
    },
    jade: {
      files: ['src/**/*.jade','src/**/*.md'],
      tasks: [ 'jade' ]
    },
    images: {
      files: 'src/**/*.{png,jpg,gif}',
      tasks: [ 'copy:images' ]
    }
  }
});

  // Task(s).
  grunt.registerTask('dev', [ 'clean:build','concat','uglify','imagemin','copy:build', 'jade', 'stylus:build','connect:dev', 'watch' ]);
  grunt.registerTask('crit',['critical'])
};