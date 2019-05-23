const stylus = require('stylus');

module.exports = function (callback) {
  return function (str, options) {
    const stylusOptions = {
      compress: options.compress === undefined || options.compress
    }
    if (callback) {
      callback(stylusOptions, options, str);
    }
    let style;
    let error;
    stylus.render(str, stylusOptions, function (err, css) {
      if (err) {
        delete err.input;
        error = err;
      } else {
        style = !options.wrap ? css : '<style>' + css + '</style>';
      }
    });
    if (error) {
      throw error;
    }
    return style;
  }
}
