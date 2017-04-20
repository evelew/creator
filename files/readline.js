'use strict'

const colors = require('colors')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// const prefix = '> '

// rl.on('line', cmd => {
//   rl.setPrompt(prefix.grey, prefix.length);
//   rl.prompt();
// }).on('close', function () {
//   console.log('Have a great day!');
//   process.exit(0);
// })

// rl.setPrompt(prefix, prefix.length);
// rl.prompt();

module.exports = rl