'use strict';

var SetCollection = require('../../');

module.exports = function (t, a) {
	var set = new SetCollection();

	a(set.isCopy([]), true, "isCopy: Empty");
	a(set.isCopy(new SetCollection()), true, "isCopy: Empty set");
	set.add('raz');
	a(set.isCopy([]), false, "isCopy: Add: Empty");
	a(set.isCopy(['raz']), true, "isCopy: Add: Value");
	set.add('dwa');
	a(t.call(set, ['raz', 'dwa']), true, "isCopy: Add #2: Value");
	a(t.call(set, ['dwa', 'raz']), true, "isCopy: Add #2: Order");
	a(t.call(set, ['dwa', 'raz', 'foo']), false, "isCopy: Add #2: Greater");
	a(t.call(set, ['raz', 'foo']), false, "isCopy: Add #2: Diff");
	a(t.call(set, ['raz']), false, "isCopy: Add #2: Less");
	a(t.call(set, new SetCollection(['raz', 'dwa'])), true,
		"isCopy: Add #2: SetCollection: Value");
	a(t.call(set, new SetCollection(['dwa', 'raz', 'foo'])), false,
		"isCopy: Add #2: SetCollection: Greater");
	a(t.call(set, new SetCollection(['raz', 'foo'])), false,
		"isCopy: Add #2: SetCollection: Diff");
	a(t.call(set, new SetCollection('raz')), false,
		"isCopy: Add #2: SetCollection: Less");
};
