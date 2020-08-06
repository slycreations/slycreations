module.exports = function count(array) {
  if (Object.prototype.toString.call(array) !== '[object Array]') {
    return false;
  }
  return array.length;
}