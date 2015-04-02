/* global module, require */
module.exports = function (grunt) {
  module.require('time-grunt')(grunt);

  grunt.initConfig({
    'nice-package': {
      all: {
        options: {
          blankLine: true
        }
      }
    },

    jshint: {
      'options': {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      default: {
        'src': [ '*.js', 'test/*.js' ]
      }
    },

    'clean-console': {
      all: {
        options: {
          url: 'demo/index.html',
          timeout: 1
        }
      }
    }
  });

  var plugins = module.require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['deps-ok', 'nice-package', 'jshint', 'clean-console']);
};
