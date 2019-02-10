'use strict';
module.exports = function(app) {
  // link handlers
  var getHandlers = require('.handlers/getHandlers');
  app.route('/entity/:queryParam').get(getHandlers.getEntity);
};
