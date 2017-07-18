'use strict'

const fs = require('fs')
const rl = require('./../readline')
const path = require('path')

const paths = require('./../global-paths')
const dir = path.normalize(__dirname + '/../../copy/')
const runNPM = require('./../run/run-npm-install')

const copyFiles = () => {
  fs.readdir(dir, (err, files) => {
    files.forEach(file => {
      const filePath = paths.projectRoot + '/' + file
      fs.createReadStream('./copy/' + file).pipe(fs.createWriteStream(filePath))
    });
  })

	runNPM()
}

module.exports = copyFiles