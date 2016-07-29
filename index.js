/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-helpers',
  included: function included(app) {
    this._super.included(app);
    app.import('vendor/fnc.js');
    app.import('vendor/md5.js', {
      exports: {
        md5: ['default']
      }
    });
  }
};
