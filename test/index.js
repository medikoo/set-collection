'use strict';

module.exports = function (t, a) {
	var set = t('raz', 'dwa'), data = [];

	a(set._isSet_, true, "Set");
	set.forEach(function (x) { data.push(x); });
	a.deep(data.sort(), ['raz', 'dwa'].sort(), "ForEach");
	a.deep(set.isCopy(['raz', 'dwa']), true, "isCopy #1");
	a.deep(set.isCopy(['raz', 'trzy']), false, "isCopy #2");
};
