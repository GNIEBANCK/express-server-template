'use strict';
module.exports = function(app) {
  // link handlers
  var getHandlers = require('./handlers/getHandlers');
  app.route('/entity/:pathParam').get(getHandlers.getParams);
};
