# scroll-bar-width
Detect browser scroll bar width (e.g. 15px on Mac, 25px on Windows etc)

## Example
```javascript

var scrollBarWidth = require('scroll-bar-width');

// initialize it once in your code
scrollBarWidth.init();

// get the width
var width = scrollBarWidth.get();

console.log(width) // ----> 25px for Windows

[tests](http://github.com/Jam3/scroll-bar-width/blob/master/test).
```

## Install
```sh
npm install scroll-bar-width --save
``` 
 
## Test
```sh
npm t
```
NOTE: Test requires [beefy](http://didact.us/beefy/) to be installed globally.

 
## License
MIT, see [LICENSE.md](http://github.com/Jam3/scroll-bar-width/blob/master/LICENSE) for details.
