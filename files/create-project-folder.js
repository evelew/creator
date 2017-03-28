'use strict'

const fs = require('fs');
const projectFolder = 'C:/Users/Evellyn/Documents/github/novo-projeto';
const projectFolderCallback = function (err) {
  if (err) return console.log(err);
  console.log('Projeto criado')
}

fs.mkdir(projectFolder, foldersCallback);