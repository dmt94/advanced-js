let universeSays = [
  'you will become a software developer.',
  'you are enough.',
  'you are capable.',
  'you are changing for the best.',
  'you will achieve all your goals in life.',
  'your sense of presence is a gift.',
  'your talents and service will have a positive impact on the world.',
  'you are safe.',
  'you will thrive by connecting with others. you will attract the right people and mindset in your journey.',
  'your creativity and mind are gifts. you will keep expanding these gifts for the better.',
  'you will NEVER lose yourself. you can trust that you are on the right path.',
  'you have a lot to be grateful for.',
  'you will keep building the foundation and skills that will help you create positive marks in this world',
  'don\'t worry about the future, everything IS okay.',
  'you will be able to keep working towards your aspirations.',
  'accept all parts of you. you are meant to thrive. you will grow more into yourself. trust the process',
  'trust that the universe supports you.',
  'you will be able to continue building the trust you have with yourself.',
  'your growth, sense of purpose, and goals are in alignment.',
  'remember to connect with yourself. you are a sacred human being. respect your process. respect others.',
];



let getRandomMessage = function() {
  let universeMessage = universeSays[Math.floor(Math.random() * universeSays.length)];
  return universeMessage;
}


let replaceYou = () => {
  let message = getRandomMessage();
  if (message.includes('you')) {
    message = message.split(' ').map(word => word === 'you' ? word.toUpperCase() : word);
    return message.join(' ');
  }
  return message;
}

let messageForYou = () => {
  let msg = replaceYou();
    if (msg.includes('. ')) {
    msg = msg.split('. ').map(sentence => {
      return msg.slice(0, 1).toUpperCase() + sentence.slice(1);
    });
    return msg.join('.\n');
  }
  return msg.slice(0, 1).toUpperCase() + msg.slice(1);
}

console.log(messageForYou());




