'use strict';

var d             = require('es5-ext/lib/Object/descriptor')
  , SetCollection = require('./set');

Object.defineProperties(SetCollection.prototype, {
	forEach: d(require('./ext/for-each')),
	isCopy:  d(require('./ext/is-copy'))
});

module.exports = SetCollection;
