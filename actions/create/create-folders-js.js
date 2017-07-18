'use strict'

const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const getDirName = require('path').dirname

const rl = require('./../readline')
const paths = require('./../global-paths')
const createJSFiles = require('./create-files-js')

const create = (directory, folder) => {
  mkdirp(directory, (err) => {
    if (err) return console.log(`ERRO mkdir: "${err}"`)
    console.log(`Pasta criada: "${directory.green}"`)
  })
}

const createFoldersJS = () => {
  const question = 'Nome das pastas JS (separados por vírgula):\n'

  rl.question(question, (answer) => {
    let folders = answer.split(',')

    folders.forEach(folder => {
      if (folder === '') return

      const directory = path.normalize(paths.projectRoot + paths.JS + folder)
      create(directory, folder)

      paths.JS_folders.push(folder)
    })

    createJSFiles()
  })
}

module.exports = createFoldersJS