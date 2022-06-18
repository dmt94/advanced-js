




let message = function() {
  let sentence = 'remember to connect with yourself. you are a sacred human being. respect your process. respect others.';
  if (sentence.includes('.')) {
    sentence = sentence.split('. ').map(sentence => sentence.slice(0, 1).toUpperCase() + sentence.slice(1))
    return sentence.join('.\n');
  }
}


console.log(message());