'use strict';

var SetCollection = require('../');

module.exports = function (t, a) {
	var set = new SetCollection();
	a.throws(function () { t({}); }, 'INVALID_SET', "Other");
	a.throws(function () { t(); }, 'INVALID_SET', "Undefined");
	a.throws(function () { t('raz'); }, 'INVALID_SET', "String");
	a.throws(function () { t(['raz', 'dwa']); }, 'INVALID_SET', "Array");
	a(t(set), set, "Set");
};
