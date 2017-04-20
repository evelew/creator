'use strict'

const fs = require('fs'),
  rl = require('./readline'),
  paths = require('./global-paths')

let files
let response

const folders = paths.JS_controller;

const data = '"use strict"'
const filesCallback = function (err) {
  if (err) return console.log(err)
  if (folders) CreateFilesJS()
}

function CreateFilesJS() {
  folders.forEach(folder => {
    getNames(folder)
  })
}

function getNames(folder) {
  const question = `Nome dos arquivos para a pasta ${folder.magenta} (separados por vírgula):\n`

  rl.question(question, (answer) => {
    response = `Arquivos "${answer}" criado(s)`

    files = answer.split(',')
    files.forEach(file => {
      if (file === '') return
      fs.writeFile(paths.projectRoot + paths.JS + folder + '/' + file + '.js', data, filesCallback)
    })

    console.log('Arquivo(s) criado(s)')

    folders.splice(0, 1)
    console.log('restou: ', folders)
  })
}

module.exports = CreateFilesJS