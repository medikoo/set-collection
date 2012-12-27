'use strict';

var contains   = require('es5-ext/lib/Array/prototype/contains')
  , copy       = require('es5-ext/lib/Array/prototype/copy')
  , remove     = require('es5-ext/lib/Array/prototype/remove')
  , uniq       = require('es5-ext/lib/Array/prototype/uniq')
  , d          = require('es5-ext/lib/Object/descriptor')

  , isArray = Array.isArray, forEach = Array.prototype.forEach
  , push = Array.prototype.push
  , defineProperty = Object.defineProperty

  , Constructor, SetCollection;

Constructor = function () {};
module.exports = SetCollection = function () {
	var set = new Constructor(), values = [];

	forEach.call(arguments, function self(value) {
		if (value._isSet_) push.apply(this, value.values);
		else if (isArray(value)) push.apply(this, value);
		else this.push(value);
	}, values);

	defineProperty(set, '_values', d('c', uniq.call(values)));
	set.count = set._values.length;
	return set;
};

Constructor.prototype = Object.defineProperties(SetCollection.prototype, {
	_isSet_: d(true),
	add: d(function (value) {
		if (this.has(value)) return;
		this._values.push(value);
		++this.count;
	}),
	delete: d(function (value) {
		if (!this.has(value)) return;
		remove.call(this._values, value);
		--this.count;
	}),
	has: d(function (value) { return contains.call(this._values, value); }),
	values: d.gs(function () { return copy.call(this._values); })
});
