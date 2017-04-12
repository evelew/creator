'use strict'

const fs = require('fs'),
  rl = require('./readline'),
  paths = require('./global-paths')

let files;
let response;
const data = '"use strict"';
const question = 'Nome dos arquivos (separados por vírgulo):\n';
const filesCallback = function (err) {
  if (err) return console.log(err)
  console.log('Arquivos criados')
}

function CreateFilesJS() {
  const createFilesJSCallback = function (err) {
    if (err) return console.log(err)
    console.log(response.green)
  }

  rl.question(question, (answer) => {
    response = `Arquivos "${answer}" criado(s)`

    files = answer.split(',')
    files.forEach(file => {
      if (file === '') return
      fs.writeFile(file + '.js', data, filesCallback)
    });
  })
}

module.exports = CreateFilesJS;