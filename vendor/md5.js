(function() {
  /* globals define, codemirror */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';
      return values;
    });
  }

  generateModule('md5', {
  	'default': md5
  });

})();