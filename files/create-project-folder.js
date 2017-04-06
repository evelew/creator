'use strict'

const fs = require('fs');
const rl = require('./readline');
const question = 'Nome do projeto:\n'
let response = ''

function CreateProjectFolder() {
  const projectFolderCallback = function (err) {
    if (err) return console.log(err)
    console.log(response.green)
  }

  rl.question(question, (answer) => {
    response = `Projeto "${answer}" criado`

    fs.mkdir(answer, projectFolderCallback)
    // rl.close()
  })
}

module.exports = CreateProjectFolder;