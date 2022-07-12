let messages = [
  "Always remember the light that exists inside you, and in every soul.",
  "Judging other people is not your business.",
  "Let go of circumstances and tragedies that occur in this world. Focus on what you can control in your Life",
  "Cherish your life and live with courage and integrity.",
  "Never give up on yourself and building the Life that you are proud of.",
  "Accept your circumstance and open yourself up to gratitude and love.",
  "Be strong and True.",
  "Commit and stay present. Love where you are at. Have gratitude right now.",
  "Breathe. Enjoy your breath. Enjoy the Light that is right now.",
  "See reality as it is right now for you.",
  "Do not identify with circumstances that are irrelevant to where your focus should be on at present.",
  "See Life with joy and compassion. Continue to learn and grow mindfully.",
];

function giveRandomMsg(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

function giveMessage() {
  let msgOne = giveRandomMsg(messages);
  let msgTwo = giveRandomMsg(messages);
  let msgThree = giveRandomMsg(messages);

  console.log(`First Message: ${msgOne}`);
  console.log(`Second Message: ${msgTwo === msgOne ? msgTwo = giveRandomMsg(messages) : msgTwo}`);
  console.log(`Third Message: ${msgTwo === msgThree || msgOne === msgThree ? msgThree = giveRandomMsg(messages) : msgThree}`);
};

giveMessage();