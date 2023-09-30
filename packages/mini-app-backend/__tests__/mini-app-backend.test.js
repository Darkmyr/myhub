'use strict';

const miniAppBackend = require('..');
const assert = require('assert').strict;

assert.strictEqual(miniAppBackend(), 'Hello from miniAppBackend');
console.info('miniAppBackend tests passed');
