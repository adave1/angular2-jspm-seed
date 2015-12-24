var app = 'app';
var src = 'app/src';
var vendor = 'app/vendor';
var build = 'target';
var development = 'target/development';
var coverage = 'target/coverage';
var production = 'target/production';
var developmentAssets = 'target/development/assets';
var productionAssets = 'target/production/assets';


module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: development
      },
      port: 3000,
      files: [
        development + '/**/*.js',
        developmentAssets + '/images/**'
      ]
    }
  },
  delete: {
    development: ['target/development/**/*', '!target/development/jspm/**'],
    production: production,
    coverage: coverage
  },
  copy: {
    development: {
      assets: app + '/**/*.svg',
      css: app + '/**/*.css',
      html: app + '/**/*.html',
      js: app + '/**/*.js',
      dest: development
    },
    production: {

    }
  },
  watch: {
    html: src + '/**/*.html',
    scripts: src + '/**/*.ts',
    sass: app + '/**/*.scss'
  },
  app: app,
  production: production,
  typescript: {
    development: {
      scripts: app + '/src/**/*.ts',
      dest: development + '/src',
      coverage: build + '/coverage/js'
    },
    production: {
      scripts: app + '/src/**/*.ts',
      dest: production + '/src'
    }
  },

  html: {
    development: {
      source: app + '/**/*.html',
      dest: development + '/src',
      coverage: build + '/coverage/js'
    },
    production: {
      source: app + '/**/*.html',
      dest: production
    }
  },

  sass: {
    development: {
      main: app + '/scss/app.scss',
      source: src + '/**/*.scss',
      dest: development + '/assets'
    },
    production: {
      main: app + '/style/app.scss',
      source: app + '/**/*.scss',
      dest: productionAssets + '/css'
    }
  },

  images: {
    production: {
      source: app + '/**/*.svg',
      dest: production
    }
  },

  scripts: {
    production: {
      source: production + '/src/boot.js' ,
      dest: production
    }
  }

};
