'use strict';

var contains   = require('es5-ext/array/#/contains')
  , aFrom      = require('es5-ext/array/from')
  , remove     = require('es5-ext/array/#/remove')
  , uniq       = require('es5-ext/array/#/uniq')
  , d          = require('d/d')
  , ee         = require('event-emitter/lib/core')

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

Constructor.prototype = ee(Object.defineProperties(SetCollection.prototype, {
	_isSet_: d(true),
	add: d(function (value) {
		if (this.has(value)) return;
		this._values.push(value);
		++this.count;
		this.emit('add', value);
	}),
	delete: d(function (value) {
		if (!this.has(value)) return;
		remove.call(this._values, value);
		--this.count;
		this.emit('delete', value);
	}),
	has: d(function (value) { return contains.call(this._values, value); }),
	values: d.gs(function () { return aFrom(this._values); })
}));
