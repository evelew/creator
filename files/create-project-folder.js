'use strict'

const fs = require('fs')
const rl = require('./readline')
const path = require('./global-paths')
const question = 'Nome do projeto:\n'
let response = ''

const CreateJS = require('./create-folders-js')

function CreateProjectFolder() {
  const projectFolderCallback = function (err) {
    if (err) return console.log(err)
    console.log(response.green)
    CreateJS()    
  }

  rl.question(question, (answer) => {
    response = `Projeto "${answer}" criado`
    let directory = path.projectRoot + answer

    fs.mkdir(directory, projectFolderCallback)
    path.projectRoot = path.projectRoot + answer
    console.log(path.projectRoot.red)
  })
}

module.exports = CreateProjectFolder