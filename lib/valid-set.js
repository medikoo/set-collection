'use strict';

var customError = require('es5-ext/error/custom');

module.exports = function (x) {
	if ((x == null) || !x._isSet_) {
		throw customError(x + " is not a set", 'INVALID_SET');
	}
	return x;
};
