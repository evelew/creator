'use strict'

const fs = require('fs')
const rl = require('./readline')
const paths = require('./global-paths')
const folders = paths.JS_folders;
const CreateCSSFolders = require('./create-folders-css')

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
    const response = `Arquivos "${answer}" criado(s)`
    let files = answer.split(',')

    files.forEach(file => {
      if (file === '') return

      const filePath = paths.projectRoot + paths.JS + folder + '/' + file + '.js'
      fs.writeFile(filePath, data, filesCallback)
    })

    folders.splice(0, 1)
    if (folders.length === 0) CreateCSSFolders()
  })
}

module.exports = CreateFilesJS