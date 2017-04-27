'use strict'

const fs = require('fs')
const rl = require('./readline')
const paths = require('./global-paths')
const folders = paths.CSS_folders

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
    let response = `Arquivos "${answer}" criado(s)`

    let files = answer.split(',')
    files.forEach(file => {
      if (file === '') return

      const filePath = paths.projectRoot + paths.CSS + folder + '/' + file + '.scss'
      fs.writeFile(filePath, data, filesCallback)
    })

    folders.splice(0, 1)

    if(folders.length === 0) console.log('ok acabou')
    // TODO CHAMAR AQUI A FUNÇÃO QUE COPIA O ARQUIVO GULPFILE.JS
  })
}

module.exports = CreateFilesCSS