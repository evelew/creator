'use strict'

const fs = require('fs');
// let files = process.argv[2];
let files = 'opa,wi';
const data = '"use strict"';
const filesCallback = function (err) {
  if (err) return console.log(err)
  console.log('Arquivos criados')
}

files = files.split(',')
files.forEach(file => {
  fs.writeFile(file + '.js', data, filesCallback)
});