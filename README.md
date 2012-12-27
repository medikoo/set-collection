# set-collecton - Set collection type for JavaScript

Implemented according to [upcoming ECMAScript6 standard](http://wiki.ecmascript.org/doku.php?id=harmony:simple_maps_and_sets), plus few non standard extensions

```javascript
var Set = require('set-collection');

var set = new Set([23, 'foo', { lorem: true }]);

set.has('foo'); // true
set.add('bar');
set.delete(23);

console.log(set.values); // ['foo', 'bar', { lorem: true }];
```

## Installation
### NPM

In your project path:

	$ npm install set-collection

### Browser

You can easily bundle NPM packages for browser with [modules-webmake](https://github.com/medikoo/modules-webmake)

## Tests [![Build Status](https://travis-ci.org/medikoo/set-collection.png)](https://travis-ci.org/medikoo/set-collection)

	$ npm test
