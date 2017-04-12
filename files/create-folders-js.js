'use strict'

const fs = require('fs'),
  rl = require('./readline'),
  paths = require('./global-paths'),
  path = require('path')

let folders;
let response;
const question = 'Nome das pastas (separados por vírgulo):\n';

function CreateFoldersJS() {
  const createFilesJSCallback = function (err) {
    if (err) return console.log(err)
    console.log(response.green)
  }

  rl.question(question, (answer) => {
    response = `Arquivos "${answer}" criado(s)`

    folders = answer.split(',')
    folders.forEach(folder => {
      if (folder === '') return
      let directory = path.normalize(__dirname + paths.JS + folder)

      console.log(directory.green)

      fs.stat(directory, (err) => {
        if (err && err.code === 'ENOENT') {
          console.log('esse erro mesmo')
          
          fs.mkdir(directory, (err) => {
            if (err) return console.log(err)
            console.log('Pastas js criadas')
          })
        } else {
          console.log('ERR: ', err)
        }
      })
    })

  })
}

module.exports = CreateFoldersJS;