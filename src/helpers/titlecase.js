module.exports  = function(str) {
  if (str && typeof str === 'string') {
    return str.replace(/\w\S*/g, function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  }
};