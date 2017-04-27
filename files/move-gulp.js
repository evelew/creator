'use strict'

const fs = require('fs')
const rl = require('./readline')
const paths = require('./global-paths')

function MoveGulpFile() {
  const fileName = 'gulpfile.js'
  const filePath = paths.projectRoot + '/' + fileName
  
  fs.createReadStream(fileName).pipe(fs.createWriteStream(filePath))
}

module.exports = MoveGulpFile