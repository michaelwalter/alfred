#! /usr/bin/env node
const yargs = require('yargs');
const path = require('path');
const helpers = require('@alfred/commons');

const options = yargs
    .usage('Usage: <start>')
    .option('start', {
        alias: 's',
        describe: 'run your program'
    })
    .array('config')
    .argv;

if (options['_'].includes('start')) {
    let configurationType = options['config'] || 'default';
    const configuration =  require(path.resolve('./configurations/' + configurationType + '.js'))
    helpers.logger('[main] Running application... ' + configuration.name);
} else {
    helpers.logger('[main] Command not found :(');
}