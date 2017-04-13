'use strict'

const fs = require('fs'),
  path = require('path'),
  mkdirp = require('mkdirp'),
  getDirName = require('path').dirname,
  rl = require('./readline'),
  paths = require('./global-paths')

let folders;
let response;
const question = 'Nome das pastas (separados por vírgulo):\n';

function CreateFoldersJS() {
  rl.question(question, (answer) => {
    response = `Arquivos "${answer}" criado(s)`;

    folders = answer.split(',')
    folders.forEach(folder => {
      if (folder === '') return;
      const directory = path.normalize(__dirname + paths.JS + folder);

      mkdirp(directory, (err) => {
        if (err) return console.log(`ERRO mkdir: "${err}"`);
        console.log(`Pasta criada: "${directory.green}"`);
      });
    });
  });
}

module.exports = CreateFoldersJS;