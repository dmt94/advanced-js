/*
CommonJS and AMD
- design modules where global scope doesnt interfere and
variables can be overwritten
*/

//CommonJS
//can import diff modules and files using require
var module1 = require('module1')//.fight //can export specific functions
var module2 = require('module1')//.importFunc2

function fight() {

}

// export function this way using moduleName.export, containing an object
// that holds function
module1.exports = {
  fight: fight
}

/*
import and export system
Made code easy to share in node
npm = node package manager : way for people to share modules

Sharing is Caring = Growth 
Node.js is popular bc programmers were able to share code


Browserify
- allows you require('modules') in the browser
by bundling up all your dependencies

- it means that by using browserify, we
  can run (in command line)
  browserify script.js > bundle.js
  > bundles scripts
  > it will be able to create dependencies irregardless of order
  > allows it to be more asynchronous

*/

/*
AMD = loads scripts and modules asynchronously

bc JS didnt have native modules
ppl came up with diff solutions
*/
define(['module1', 'module2'],
//we are explicit with what each module needs
//avoids pollution of global namespace
  function (module1Import, module2Import) {
    var module1 = module1Import;
    var module2 = module2Import;

    function dance() {

    }

    return {
      dance: dance,
    }
  });

  /*
  require.js was the main way people used modules

  CommonJS and AMD both solved
  - dependency resolution
  - pollution of global scopes
  */