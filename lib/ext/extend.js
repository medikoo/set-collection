'use strict';

var isArray = Array.isArray;

module.exports = function (set) {
	if (set._isSet_) {
		if (!set.forEach) set = set.values;
	} else if (!isArray(set)) {
		throw new TypeError("Set can be extended only with Set or Array value");
	}
	set.forEach(this.add, this);
};
