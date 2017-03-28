'use strict'

const fs = require('fs');
const files = ['global.js'];
const data = '"use strict"';
const filesCallback = function (err) {
  if (err) return console.log(err);
  console.log('Arquivos criados');
}

files.forEach(file => {
  fs.writeFile(file, data, filesCallback);
});