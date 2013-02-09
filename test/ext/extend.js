'use strict';

var SetCollection = require('../../');

module.exports = function (t, a) {
	var set = new SetCollection('raz', 'dwa', 'trzy');

	t.call(set, ['foo', 'bar', 'dwa', 'foo']);
	a.deep(set.values.sort(), ['raz', 'dwa', 'trzy', 'foo', 'bar'].sort(),
		"Array");
	t.call(set, new SetCollection('cztery', 'piec'));
	a.deep(set.values.sort(),
		['raz', 'dwa', 'trzy', 'foo', 'bar', 'cztery', 'piec'].sort(), "Set");
};
