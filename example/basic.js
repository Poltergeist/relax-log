var relaxLog = require('../lib/index')({url: 'http://localhost:5984/relaxlog'});

relaxLog.info('Starting to Log');

relaxLog.error('Miserable Failure occured');

relaxLog.info('Restarting task');

relaxLog.error('Miserable Failure occured again');
setTimeout(function() {
  relaxLog.info('Email send to Admin');
}, 500);
