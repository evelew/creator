'use strict'

const fs = require('fs'),
  path = require('path'),
  mkdirp = require('mkdirp'),
  getDirName = require('path').dirname,
  rl = require('./readline'),
  paths = require('./global-paths')

const CreateCSSFiles = require('./create-files-css')

const question = 'Nome das pastas CSS (separados por vírgula):\n'
let folders

function CreateFoldersCSS() {
  console.log('criar pastas css')
  rl.question(question, (answer) => {
    folders = answer.split(',')
    folders.forEach(folder => {
      if (folder === '') return
      const directory = path.normalize(paths.projectRoot + paths.CSS + folder)
      create(directory, folder)

      paths.CSS_controller.push(folder)
    })

    CreateCSSFiles()
  })
}

function create(directory, folder) {
  mkdirp(directory, (err) => {
    if (err) return console.log(`ERRO mkdir: "${err}"`)
    console.log(`Pasta criada: "${directory.green}"`)
  })
}

module.exports = CreateFoldersCSS