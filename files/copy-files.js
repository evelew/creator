'use strict'

// **NÃO ESTA FUNCIONANDO AINDA**

const fs = require('fs')
const rl = require('./readline')
const path = require('path')
const mkdirp = require('mkdirp')

const paths = require('./global-paths')
const dir = path.normalize(__dirname + '/../copy/')

function CopyFiles() {
  mkdirp(path.normalize(__dirname + '/../copies/'), (err) => {
    if (err) return console.log(`ERRO mkdir: "${err}"`)
    console.log(path.normalize(__dirname + '/copies/'))
  })

  fs.readdir(dir, (err, files) => {
      console.log(files)
    
    files.forEach(file => {
      console.log(file)
      // const filePath = paths.projectRoot + '/' + file
      const filePath = path.normalize(__dirname + './../copies/' + file)

      console.log('aqio ', filePath)

      fs.createReadStream('./copy/' + file).pipe(fs.createWriteStream(filePath))

      // console.log(file)
    });
  })
}

module.exports = CopyFiles