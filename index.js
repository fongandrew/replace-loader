'use strict';
var loaderUtils = require('loader-utils');

module.exports = function(content) {
  if (this.cacheable) { this.cacheable(); }
  
  var query = loaderUtils.parseQuery(this.query);
  if (typeof query === "object" && query.regex && query.sub) {
    var regex = new RegExp(query.regex, query.flags);
    content = content.replace(regex, query.sub);
  }

  return content;
};