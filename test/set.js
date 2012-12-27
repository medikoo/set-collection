'use strict';

module.exports = function (t, a) {
	var set = t();

	a.deep(set.values, [], "Values: Empty");
	a(set.count, 0, "Count: Empty");
	a(set.isCopy([]), true, "isCopy: Empty");
	a(set.isCopy(t()), true, "isCopy: Empty set");
	a(set.has('raz'), false, "Has: false");
	set.add('raz');
	a(set.isCopy([]), false, "isCopy: Add: Empty");
	a(set.isCopy(['raz']), true, "isCopy: Add: Value");
	a.deep(set.values, ['raz'], "Values: Add");
	a(set.count, 1, "Count: Add");
	a(set.has('raz'), true, "Has: true");
	set.add('dwa');
	a.deep(set.values.sort(), ['raz', 'dwa'].sort(), "Values: Add #2");

	a(set.count, 2, "Count: Add #2");
	a(set.has('raz'), true, "Has: true #2");
	a(set.has('dwa'), true, "Has: true #3");
	set.delete('raz');
	a.deep(set.values, ['dwa'], "Values: Delete");
	a(set.count, 1, "Count: Delete");
	a(set.has('raz'), false, "Has: false #2");
	a(set.has('dwa'), true, "Has: true #4");

	set.add('morda');
	set.add('jan');

	return {
		"Constructor": function (a) {
			var set = t(t('raz', 'dwa', ['raz', 'morda', 'moja']), 'inny',
				['mistrz', 'ole', 'dwa', 'misz']);

			a.deep(set.values.sort(), ['raz', 'dwa', 'morda', 'moja', 'inny',
				'mistrz', 'ole', 'misz'].sort());

			a(set.count, 8, "Count");
		}
	};
};
