import fs from 'fs'
import path from 'path'
import superagent from 'superagent'
import mkdirp from 'mkdirp'
import { urlToFilename } from './utils.js'

function saveFile (filename, contents, cb) {
  mkdirp(path.dirname(filename), err => {
    if (err) {
      return cb(err)
    }
    fs.writeFile(filename, contents, cb)
  })
}

function download (url, filename, cb) {
  console.log(`Downloading ${url}`)
  superagent.get(url).end((err, res) => {
    if (err) {
      return cb(err)
    }
    saveFile(filename, res.text, err => {
      if (err) {
        return cb(err)
      }
      console.log(`Downloaded and saved: ${url}`)
      cb(null, res.text)
    })
  })
}

export function spider (url, cb) {
  const filename = urlToFilename(url)
  fs.access(filename, err => {
    if (!err || err.code !== 'ENOENT') { // [1]
      /* If the file exists and is accessible, there won't be an error, and err will be null. If the file does not exist, an error with the code 'ENOENT' (Error: No Entry) is typically returned. 

      This condition is checking whether the file exists or if there's an error other than the file not being found (e.g., permission issues, etc.).

      If there is no error (!err), it means the file exists, and the callback returns early with cb(null, filename, false). The false indicates that the file was not newly downloaded because it already existed.

      If there is an error and the error code is not 'ENOENT', it means there's an error other than the file not being found. In this case, the callback returns early with the error using cb(err).

      If there is an error, and the error code is 'ENOENT' (file not found), the control flow proceeds to the block of code below this condition. This is where the download function is called to download the file.
      */
      return cb(null, filename, false)
    }
    download(url, filename, err => {
      if (err) {
        return cb(err)
      }
      cb(null, filename, true)
    })
  })
}