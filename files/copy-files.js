'use strict'

// **NÃO ESTA FUNCIONANDO AINDA**

const fs = require('fs')
const rl = require('./readline')
const paths = require('./global-paths')
const dir = './copy/'

function CopyFiles() {
  fs.readdir(dir, (err, files) => {
    files.forEach(file => {
      const filePath = paths.projectRoot + '/' + file
      fs.createReadStream(file)
        .pipe(fs.createWriteStream(filePath))
    });
  })
}

module.exports = CopyFiles