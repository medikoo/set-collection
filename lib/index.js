'use strict';

var d             = require('d/d')
  , SetCollection = require('./set');

Object.defineProperties(SetCollection, {
	validSet: d(require('./valid-set'))
});

Object.defineProperties(SetCollection.prototype, {
	extend:  d(require('./ext/extend')),
	forEach: d(require('./ext/for-each')),
	isCopy:  d(require('./ext/is-copy')),
	some:    d(require('./ext/some'))
});

module.exports = SetCollection;
