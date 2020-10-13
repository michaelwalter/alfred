#! /usr/bin/env node
const yargs = require("yargs");

const options = yargs
    .usage("Usage: <start>")
    .option("start", {
        alias: 's',
        describe: 'run your program'
    })
    .argv;

if (options['_'].includes('start')) {
    console.log("Running application...")
} else {
    console.log('Command not found :(');
}