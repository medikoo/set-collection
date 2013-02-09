'use strict';

var SetCollection = require('../../');

module.exports = function (t, a) {
	var set = new SetCollection('dwa', 'morda', 'jan')
	  , data = [[], [], [], [], []]
	  , x = {};

	a(t.call(set, function (a, b, c, d) {
		data[0].push(a);
		data[1].push(b);
		data[2].push(c);
		data[3].push(d);
		data[4].push(this);
		if (d) return true;
	}, x), true, "Return");

	a.deep(data[0].sort(), ['dwa', 'morda'].sort(), "ForEach: Values");
	a.deep(data[1], [null, null], "ForEach: Indexes");
	a.deep(data[2], [set, set], "ForEach: Objects");
	a.deep(data[3], [0, 1], "ForEach: Order indexes");
	a.deep(data[4], [x, x], "ForEach: This arg");

	a(t.call(set, function () { return false; }), false, "Return false");
};
