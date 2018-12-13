const stylus = require('stylus');

module.exports = function (callback) {
  return function (str, options) {
    let style;
    let error;
    const renderer = stylus(str)
      .set('compress', options.compress === undefined || options.compress);
    if (callback) {
      callback(renderer, options, str);
    }
    renderer.render(function (err, css) {
        if (err) {
          delete err.input;
          error = err;
        } else {
          style = !options.wrap ? css : '<style>' + css '</style>';
        }
    });
    if (error) {
      throw error;
    }
    return style;
  }
}
