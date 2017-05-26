'use strict'

const fs = require('fs')
const rl = require('./readline')
const path = require('path')

const paths = require('./global-paths')
const dir = path.normalize(__dirname + '/../copy/')
const RunNpm = require('./run-npm-install')

function CopyFiles() {
  fs.readdir(dir, (err, files) => {
    files.forEach(file => {
      const filePath = paths.projectRoot + '/' + file

      fs.createReadStream('./copy/' + file).pipe(fs.createWriteStream(filePath))
    });
  })

	// RunNpm()
}

module.exports = CopyFiles