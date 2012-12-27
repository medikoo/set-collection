'use strict';

var SetCollection = require('../../');

module.exports = function (t, a) {
	var set = new SetCollection('raz', 'dwa');

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
