#! /usr/bin/env node
const yargs = require("yargs");
const path = require("path");
const helpers = require("@alfred/commons");

const options = yargs
    .usage("Usage: <start>")
    .option("start", {
        alias: 's',
        describe: 'run your program'
    })
    .argv;

if (options['_'].includes('start')) {
    const config = require(path.resolve('./config'))
    helpers.logger("[ALF-1] Running application...", config.name);
} else {
    helpers.logger('[ALF-1] Command not found :(');
}