'use strict'

const fs = require('fs'),
  rl = require('./readline'),
  paths = require('./global-paths')
let files,
  response
const data = '"use strict"',
  question = 'Nome dos arquivos (separados por vírgulo):\n',
  filesCallback = function (err) {
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
      if(file === '') return
      fs.writeFile(file + '.js', data, filesCallback)
    });
    // rl.close()
  })
}

module.exports = CreateFilesJS;