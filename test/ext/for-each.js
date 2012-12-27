'use strict';

var SetCollection = require('../../');

module.exports = function (t, a) {
	var set = new SetCollection('dwa', 'morda', 'jan')
	  , data = [[], [], [], [], []]
	  , x = {};

	t.call(set, function (a, b, c, d) {
		data[0].push(a);
		data[1].push(b);
		data[2].push(c);
		data[3].push(d);
		data[4].push(this);
	}, x);

	a.deep(data[0].sort(), ['dwa', 'morda', 'jan'].sort(), "ForEach: Values");
	a.deep(data[1], [null, null, null], "ForEach: Indexes");
	a.deep(data[2], [set, set, set], "ForEach: Objects");
	a.deep(data[3], [0, 1, 2], "ForEach: Order indexes");
	a.deep(data[4], [x, x, x], "ForEach: This arg");
};
