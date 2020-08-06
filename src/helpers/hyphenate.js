module.exports = function(str) {
  if (str && typeof str === 'string') {
    return str.split(' ').join('-');
  }
};