'use strict'

const exec = require('child_process').exec
const paths = require('./global-paths')

function RunNpm() {
  exec('npm install', {
    cwd: paths.projectRoot
  }, (err, stdout, stderr) => {
    if (err) return console.log(err)

    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
  })
}

module.exports = RunNpm