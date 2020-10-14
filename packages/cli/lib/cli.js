#! /usr/bin/env node
const yargs = require("yargs");
const path = require("path");
const logger = require("./logger");

const options = yargs
    .usage("Usage: <start>")
    .option("start", {
        alias: 's',
        describe: 'run your program'
    })
    .argv;

if (options['_'].includes('start')) {
    const config = require(path.resolve('./config'))
    logger("Running application...", config.name);
} else {
    logger('Command not found :(');
}