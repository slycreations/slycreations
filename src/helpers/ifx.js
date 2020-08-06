module.exports = function ifx(condition, value1, value2) {
  if (value2.name === 'ifx' && value2.hasOwnProperty('hash')) {
    value2 = '';
  }
  return condition ? value1 : value2;
}