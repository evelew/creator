'use strict'

const fs = require('fs')
const rl = require('./readline')
const paths = require('./global-paths')

function MovePackageJSON() {
  const fileName = 'package.json'
  const filePath = paths.projectRoot + '/' + fileName
  
  console.log(`Copiando arquivo ${fileName}`.green)
  fs.createReadStream('package-to-copy.json').pipe(fs.createWriteStream(filePath))
}

module.exports = MovePackageJSON