'use strict'

const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const getDirName = require('path').dirname
const rl = require('./../readline')
const paths = require('./../global-paths')

const createCSSFiles = require('./create-files-css')

const create = (directory, folder) => {
  mkdirp(directory, (err) => {
    if (err) return console.log(`ERRO mkdir: "${err}"`)
    console.log(`Pasta criada: "${directory.green}"`)
  })
}

const createFoldersCSS = () => {
  const question = 'Nome das pastas CSS (separados por vírgula):\n'

  rl.question(question, (answer) => {
    let folders = answer.split(',')

    folders.forEach(folder => {
      if (folder === '') return

      const directory = path.normalize(paths.projectRoot + paths.CSS + folder)
      create(directory, folder)

      paths.CSS_folders.push(folder)
    })

    createCSSFiles()
  })
}


module.exports = createFoldersCSS