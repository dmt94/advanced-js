const makeNuclearBtn = () => {
  let timeWithoutLoveShower = 0;
  const passTime = () => timeWithoutLoveShower++;
  const totalPeaceTime = () => timeWithoutLoveShower;
  const launch = () => {
    timeWithoutLoveShower = -1;
    return '🌈💛💗💜🧡💚🌟';
  } 

  setInterval(passTime, 1000); //keeps incrementing every 1 sec
  return {
    totalPeaceTime: totalPeaceTime
  }
}

const ohYes = makeNuclearBtn();

console.log(ohYes.totalPeaceTime());

/*
principle of least privilege
we don't want to give anybody access to API
using closures, we are able to access things like 
timeWithoutLoveShower
*/

