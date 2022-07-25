// function fail() {
//   try {
//     console.log('this works');
//     throw new Error('ooopsiee!!!');
//   } catch (error) {
//     console.log('we have made an oopsie');
//     console.log(error.name, error.message);
//   } finally {
//     console.log('still good');
//     return 'returning fail';
//   }
// }

// fail();


function fail() {
  try {
    console.log('this works');
    throw new Error('oopsie');
  } catch(e) {
    console.log('error', e);
  } finally {
    console.log('still good');
    return 'returning from fail';
  }
  console.log('never going to get here'); // not reachable
}
fail();
