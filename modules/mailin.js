/**
 * Created by Hongcai Deng on 2015/12/28.
 */

'use strict';

let path = require('path');
let mailin = require('mailin');
let config = require(path.join(__dirname, '..', 'config-default.json'));

mailin.start(config.mailin);

mailin.on('error', function(err) {
  console.error(new Date(), err);
});

/* Event emitted after a message was received and parsed. */
mailin.on('message', function (connection, data, content) {
    // console.log(new Date(), 'message connection ->', data);
    console.log(new Date(), 'message data ->', data);
    // console.log(new Date(), 'message content ->', content);
    /* Do something useful with the parsed message here.
     * Use parsed message `data` directly or use raw message `content`. */
});

module.exports = mailin;
