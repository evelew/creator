'use strict';

const fs = require('fs')
const paths = require('./global-paths')
const mkdirp = require('mkdirp')
const directories = [paths.CSS_images, paths.images]  

function CreateFoldersImages(){
  directories.forEach(directory => {
    mkdirp(paths.projectRoot + directory, (err) => {
      if (err) return console.log(`ERRO mkdir: "${err}"`)
      console.log(`Pasta criada: "${directory.green}"`)
    })
  })
}

module.exports = CreateFoldersImages