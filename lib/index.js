var nano = require('nano'),
  relaxLog = function(options) {
    this.ERROR = options.error || 'ERROR';
    this.INFO = options.info || 'INFO';
    this.nano = nano(options.url);
    return this;
  };

relaxLog.prototype.error = function(msg) {
  var errorNode = {
    date_created: new Date() * 1,
    type: this.ERROR,
    message: msg
  };
  this.nano.insert(errorNode);
};

relaxLog.prototype.info = function(msg) {
  var errorNode = {
    date_created: new Date() * 1,
    type: this.INFO,
    message: msg
  };
  this.nano.insert(errorNode);
};

module.exports = function(options) {
  return new relaxLog(options);
};
