var scrollBarWidth = require('../index.js');

var body = document.getElementsByTagName('body')[0];
body.style.position = 'absolute';
body.style.overflow = 'hidden';
body.style.width = '100%';
body.style.height = '100%';
body.style.margin = '20px';

scrollBarWidth.init();

var txt = document.createElement('div');
txt.innerHTML = 'Scroll bar width is: ' + scrollBarWidth.get() + 'px';
document.body.appendChild(txt);