'use strict';

/** Small helpers for the ZZ test app (safe to delete). */

function add(a, b) {
  return a + b;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

module.exports = { add, clamp };

function largest(values) {
    return Math.max(...values);
}

module.exports.largest = largest;
// ZZ second push (safe to delete)
