'use strict'

const fs = require('fs'),
  path = require('path'),
  mkdirp = require('mkdirp'),
  getDirName = require('path').dirname,
  rl = require('./readline'),
  paths = require('./global-paths')
const CreateJSFiles = require('./create-files-js')
const question = 'Nome das pastas JS (separados por vírgula):\n'
let folders

function CreateFoldersJS() {
  rl.question(question, (answer) => {
    folders = answer.split(',')
    folders.forEach(folder => {
      if (folder === '') return
      const directory = path.normalize(paths.projectRoot + paths.JS + folder)
      create(directory, folder)

      paths.JS_controller.push(folder)
    })

    CreateJSFiles()
  })
}

function create(directory, folder) {
  mkdirp(directory, (err) => {
    if (err) return console.log(`ERRO mkdir: "${err}"`)
    console.log(`Pasta criada: "${directory.green}"`)
  })
}

module.exports = CreateFoldersJS