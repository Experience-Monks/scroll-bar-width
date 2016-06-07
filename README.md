# scrollbar-width
Detect browser scroll bar width (e.g. 15px on Mac, 25px on Windows etc)

## Example
```javascript

var scrollBarWidth = require('../index.js');

// initialize it once in your code
scrollBarWidth.init();

// get the width
var width = scrollBarWidth.get();

console.log(width) // ----> 25px for Windows

[tests](http://github.com/Jam3/scrollbar-width/blob/master/test).
```

## Install
```sh
npm install scrollbar-width --save
``` 
 
## Test
```sh
npm t
```
NOTE: Test requires [beefy](http://didact.us/beefy/) to be installed globally.

 
## License
MIT, see [LICENSE.md](http://github.com/Jam3/scrollbar-width/blob/master/LICENSE) for details.
