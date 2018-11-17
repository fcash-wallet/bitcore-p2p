'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on fcash-p2p Module {0}'
};

module.exports = require('fcash-lib').errors.extend(spec);
