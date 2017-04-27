'use strict'

const fs = require('fs'),
  rl = require('./readline'),
  paths = require('./global-paths')

let files
let response

const folders = paths.CSS_controller;

// const CreateCSSFolders = require('./create-folders-css')

const data = '"use strict"'
const filesCallback = function (err) {
  if (err) return console.log(err)
  if (folders) CreateFilesCSS()
}

function CreateFilesCSS() {
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
      fs.writeFile(paths.projectRoot + paths.CSS + folder + '/' + file + '.scss', data, filesCallback)
    })

    folders.splice(0, 1)
  })
}

module.exports = CreateFilesCSS