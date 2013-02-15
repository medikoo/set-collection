'use strict';

var CustomError = require('es5-ext/lib/Error/custom');

module.exports = function (x) {
	if ((x == null) || !x._isSet_) {
		throw new CustomError(x + " is not a set", 'INVALID_SET');
	}
	return x;
};
