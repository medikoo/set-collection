'use strict';

var callable = require('es5-ext/object/valid-callable')

  , call = Function.prototype.call;

module.exports = function (cb/*, thisArg*/) {
	var thisArg = arguments[1];
	callable(cb);
	return this._values.some(function (value, index) {
		return call.call(cb, thisArg, value, null, this, index);
	}, this);
};
