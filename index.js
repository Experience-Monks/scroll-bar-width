var scrollBarWidth;

module.exports = {

  init: function () {
    var scrollDiv = document.createElement('div');
    scrollDiv.style.width = '100px';
    scrollDiv.style.height = '100px';
    scrollDiv.style.overflow = 'scroll';
    scrollDiv.style.position = 'absolute';

    document.body.appendChild(scrollDiv);
    scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
  },

  get: function () {
    return scrollBarWidth;
  }
};
