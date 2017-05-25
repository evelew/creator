'use strict'

const fs = require('fs')
const rl = require('./readline')
const paths = require('./global-paths')

function MoveGulpFile() {
  const fileName = 'gulpfile.js'
  const filePath = paths.projectRoot + '/' + fileName
  
  console.log(`Copiando arquivo ${fileName}`.green)
  fs.createReadStream('./copy/' + fileName).pipe(fs.createWriteStream(filePath))
}

module.exports = MoveGulpFile