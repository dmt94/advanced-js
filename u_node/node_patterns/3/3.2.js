import { create } from "domain";
import { EventEmitter } from "events"
import { nextTick } from "process"

//use closure
function createDivisibleBy5Error() {
  return new Error("Timestamp divisibly by 5.");
}

function ticker(number, callback) {
  const emitter = new EventEmitter();
  const divisibleby5Error = createDivisibleBy5Error();

  recursion(number, emitter, 0, divisibleby5Error, callback)
  // to emit 1 tick immediately after invocation of ticker function, add 1
  // recursion(number, emitter, 1, callback)

  return emitter
}

function recursion(number, emitter, ticks, error, callback) {
  if (Date.now() % 5 === 0) {
    nextTick(() => emitter.emit("error", error))
    //error found (createDivisiblyBy5Error), propagate up using callback
    return callback(error, ticks)
  }

  if (number <= 0) {
    //no error
    return callback(null, ticks)
  }

  setTimeout(() => {
    emitter.emit("tick")
    return recursion(number - 50, emitter, ticks + 1, error, callback)
  }, 50);
}

ticker(1000, (err, ticks) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Emitted ${ticks} ${ticks > 1 ? "ticks" : "tick"}.`)
  }
})
.on("tick", () => console.log("Tick"))
.on("error", console.error);
//propagate error using event emitter