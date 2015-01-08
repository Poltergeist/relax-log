var relaxLog = require('../lib/index')({url: 'http://localhost:5984/relaxlog'});

relaxLog.info('Starting to Log');

relaxLog.error('Miserable Failure occured');

relaxLog.info('Restarting task');

relaxLog.error('Miserable Failure occured again');
setTimeout(function() {
  relaxLog.info('Email send to Admin');
}, 500);
relaxLog.info(
  {
    message: 'Starting to Log',
    custom: true
  }
);

relaxLog.error(
  {
    message: 'Miserable Failure occured',
    custom: true
  }
);

relaxLog.info(
  {
    message: 'Restarting task',
    custom: true
  }
);

relaxLog.error(
  {
    message: 'Miserable Failure occured again',
    custom: true
  }
);
