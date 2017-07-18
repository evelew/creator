'use strict'

const colors = require('colors')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const prefix = '> '

rl.on('line', (line) => {
  rl.setPrompt(prefix, prefix.length)
  rl.prompt()
}).on('close', () => {
  console.log('Tenha um ótimo dia!')
  process.exit(0)
})

console.log(prefix + 'Ei, bom te ver.')

rl.setPrompt(prefix, prefix.length)
rl.prompt()

module.exports = rl