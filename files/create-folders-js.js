'use strict'

const fs = require('fs');
const folders = ['C:/Users/Evellyn/Documents/github/controller', 'view'];
const foldersCallback = function (err) {
  if (err) return console.log(err);
  console.log('Pastas js criadas')
}

folders.forEach(folder => {
  fs.mkdir(folder, foldersCallback);
});