'use strict'

const fs = require('fs')
const rl = require('./../readline')
const paths = require('./../global-paths')
const folders = paths.CSS_folders
const CopyFiles = require('./../copy/copy-files')

const createFilesCSS = () => {
  folders.forEach(folder => {
    getNames(folder)
  })
}

const data = '@charset "utf-8";'
const filesCallback = (err) => {
  if (err) return console.log(err)
  if (folders) createFilesCSS()
}

const getNames = (folder) => {
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

    if (folders.length === 0) {
      CopyFiles()
    }
  })
}

module.exports = createFilesCSS