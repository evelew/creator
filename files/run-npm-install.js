'use strict'

const exec = require('child_process').exec

exec('npm install', (err, stdout, stderr) => {
  if (err) return console.log(err)

  console.log(`stdout: ${stdout}`)
  console.log(`stderr: ${stderr}`)
})