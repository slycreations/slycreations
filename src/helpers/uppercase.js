module.exports = function(options) {
  if (options && typeof options === 'string') {
    return options.toUpperCase();
  } else if (options && typeof options === 'object') {
    return options.fn(this).toUpperCase();
  }
};