'use strict'

const fs = require('fs');
const projectFolder = process.argv[2];
const projectFolderCallback = function (err) {
  if (err) return console.log(err)
  console.log('Projeto criado')
}

fs.mkdir(projectFolder, foldersCallback)