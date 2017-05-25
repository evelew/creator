'use strict'

const fs = require('fs')
const rl = require('./readline')
const paths = require('./global-paths')
const RunNpm = require('./run-npm-install')

function MovePackageJSON() {
  const fileName = 'package.json'
  const filePath = paths.projectRoot + '/' + fileName

  console.log(`Copiando arquivo ${fileName}`.green)
  fs.createReadStream('./copy/package.json').pipe(fs.createWriteStream(filePath))

  RunNpm()
}

module.exports = MovePackageJSON