'use strict'

// function CreateProjectFolder() {
const fs = require('fs');
const colors = require('colors');
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = 'Nome do projeto:\n'
let response = ''

const projectFolderCallback = function (err) {
  if (err) return console.log(err)
  console.log(response.green)
}

rl.question(question, (answer) => {
  response = `Projeto "${answer}" criado`

  fs.mkdir(answer, projectFolderCallback)
  rl.close()
})
// }


// module.exports = CreateProjectFolder;