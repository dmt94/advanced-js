
//Number.isNaN() = function, returns true if argument is NaN. Remember that NaN !== NaN

//switch case example


let weatherArray = ['sunny', 'rainy', 'cloudy', 'stormy', 'hot'];

let weather = weatherArray[Math.floor(Math.random() * weatherArray.length)];

console.log(`The weather today is ${weather}`);

switch (weather) {
  case "sunny":
    console.log("It's a really great day outside. Let's go to the beach!");
    break;
  case "rainy":
    console.log("Perfect day to cuddle up, read a cozy mystery, and sip some chamomile tea.");
    break;
  case "cloudy":
    console.log("It's a nice cool day to go hiking.");
    break;
  case "hot":
    console.log(
      "Uh oh. This means that Hunkle will have a bad time outside. Guess it's a stay indoors to cool off type of day.");
    break;
  default:
    console.log("Any type of day is a day to be grateful for.");
    break;
}

