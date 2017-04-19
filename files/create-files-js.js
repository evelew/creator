'use strict'

const fs = require('fs'),
  rl = require('./readline'),
  paths = require('./global-paths')
let files
let response

const items = paths.JS_controller;

const data = '"use strict"'
const filesCallback = function (err) {
  if (err) return console.log(err)
  console.log('Arquivo(s) criado(s)')

  if(items) CreateFilesJS()
}

function CreateFilesJS() {
  items.forEach(folder => {
    getNames(folder)
  })
}

function getNames(folder) {
  const question = `Nome dos arquivos pra pasta ${folder} (separados por vírgulo):\n`

  rl.question(question, (answer) => {
    response = `Arquivos "${answer}" criado(s)`

    files = answer.split(',')
    files.forEach(file => {
      if (file === '') return
      fs.writeFile(paths.projectRoot + paths.JS + folder + '/' + file + '.js', data, filesCallback)
    })

    items.splice(0, 1)
    console.log('restou: ',items)
  })
}

module.exports = CreateFilesJS