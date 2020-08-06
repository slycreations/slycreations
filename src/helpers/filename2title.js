module.exports = function(str) {
  if (str && typeof str === 'string') {
    var str2 = '', str3 = '';
    if(str.lastIndexOf('/') >= 0) {
      str2 = str.slice(str.lastIndexOf('/')+1);
    }
    if(str2.lastIndexOf('.') > 0) {
      str3 = str2.slice(0, str2.lastIndexOf('.'));
    }
    str = str3.split(/\.|_|-/).join(' ');
    return str.replace(/\w\S*/g, function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  }
  return;
};