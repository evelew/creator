'use strict'

const childProcess = require('child_process')
const rl = require('./../readline')
const paths = require('./../global-paths')

const composerCreatLaravel = () => {
  console.log('Executando COMPOSER CREAT LARAVEL PROJECT...'.magenta)

  let exec = childProcess.exec(`composer create-project --prefer-dist laravel/laravel`, {
    cwd: paths.projectRoot
  }, (err, stdout, stderr) => {
    if (err) return console.log(err)

    console.log(`stderr: ${stderr}`)
    console.log(`stdout: ${stdout} \n COMPOSER CREAT LARAVEL PROJECT executado com sucesso`.green)

    rl.close()
  })
}

module.exports = composerCreatLaravel