'use strict'

const rl = require('./../readline')
const childProcess = require('child_process')
const paths = require('./../global-paths')
const installLaravel = require('./install-laravel')

const runNPM = () => {
  console.log('Executando NPM Install...'.magenta)

  let exec = childProcess.exec('npm install', {
    cwd: paths.projectRoot
  }, (err, stdout, stderr) => {
    if (err) return console.log(err)

    console.log(`stderr: ${stderr}`)
    console.log(`stdout: ${stdout} \n NPM INSTALL executado com sucesso`.green)

    installLaravel()
  })
}

module.exports = runNPM