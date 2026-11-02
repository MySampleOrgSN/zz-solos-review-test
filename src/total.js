'use strict';

/** Total of a list of numbers. */
function total(values) {
  return values.reduce((a, b) => a + b, 0);
}

module.exports = total;
