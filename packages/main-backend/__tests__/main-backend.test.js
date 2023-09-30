'use strict';

const fastifyBackend = require('..');
const assert = require('assert').strict;

assert.strictEqual(fastifyBackend(), 'Hello from fastifyBackend');
console.info('fastifyBackend tests passed');
