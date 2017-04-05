'use strict'

const fs = require('fs');
let folders = process.argv[2];
const foldersCallback = function (err) {
  if (err) return console.log(err)
  console.log('Pastas js criadas')
}

folders = folders.split(',');
folders.forEach(folder => {
  fs.mkdir(folder, foldersCallback)
});