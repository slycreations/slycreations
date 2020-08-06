module.exports = function(html) {
  if (html) {
    return html.replace(/<[^>]+>/g, '').replace(/\&[^;]{3,6};/g, '');
  }
  else {    
    return "";
  }
};
