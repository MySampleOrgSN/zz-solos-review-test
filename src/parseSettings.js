'use strict';

/**
 * Parses the settings payload the server sends at startup into an object.
 */
function parseSettings(text) {
  return eval('(' + text + ')');
}

module.exports = parseSettings;
