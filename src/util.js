'use strict';

/** Small helpers for the ZZ test app (safe to delete). */

function add(a, b) {
  return a + b;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

module.exports = { add, clamp };

function average(values) {
    return values.reduce(add, 0) / values.length;
}

module.exports.average = average;

// ZZ second push (safe to delete)
// ZZ third push (safe to delete)
