import { EventEmitter } from "events"
import { readFile } from "fs"
import { nextTick } from "process"
//defers execution of a function after the currently running operation completes

class FindRegex extends EventEmitter {
  constructor(regex) {
    super()
    this.regex = regex
    this.files = []
  }

  addFile(file) {
    this.files.push(file)
    return this
  }

  find() {
    // event emitted when the find() process starts, passing the input files list as an argument
    nextTick(() => this.emit("start", this.files))

    for (const file of this.files) {
      readFile(file, "utf8", (err, content) => {
        if (err) {
          return this.emit("error", err)
        }

        this.emit("fileread", file)

        const match = content.match(this.regex)
        if (match) {
          match.forEach((elem) => this.emit("found", file, elem))
        }
      })
    }

    return this
  }
}