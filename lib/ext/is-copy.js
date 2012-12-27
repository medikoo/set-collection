'use strict';

var validValue = require('es5-ext/lib/Object/valid-value');

module.exports = function (value) {
	validValue(value);
	if (value._isSet_) value = value.values;
	if (value.length !== this.count) return false;
	return value.every(function (value) {
		return this.has(value);
	}, this);
};
