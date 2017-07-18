'use strict'

const fs = require('fs')
const rl = require('./../readline')
const path = require('./../global-paths')
const question = 'Nome do projeto:\n'

const createFoldersImages = require('./create-folders-images')
const createJS = require('./create-folders-js')

const createProjectFolder = () => {
  let response = ''

  const projectFolderCallback = (err) => {
    if (err) return console.log(err)
    console.log(response.green)
    createFoldersImages()
    createJS()    
  }

  rl.question(question, (answer) => {
    response = `Projeto "${answer}" criado`
    let directory = path.projectRoot + answer

    fs.mkdir(directory, projectFolderCallback)
    path.projectRoot = path.projectRoot + answer
    console.log(path.projectRoot.red)
  })
}

module.exports = createProjectFolder