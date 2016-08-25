#!/usr/bin/env node

var crypto  = require('crypto'),
    argv    = require('yargs')
    .usage('Usage: $0 -l [num]')
    .demand(['l'])
    .describe('l', 'length in bytes')
    .argv;

crypto.randomBytes(argv.l, function(err, buffer) {
    console.log(buffer.toString('base64'));
    process.exit(0);
});
