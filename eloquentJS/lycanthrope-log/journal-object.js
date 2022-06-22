const JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

function tableFor(event, journal) {
  let table = [0,0,0,0]; // tallies or count starts at 0
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i];
    let index = 0;
    if (entry.events.includes(event)) {
      index += 1;
    }
    if (entry.squirrel) {
      index += 2;
    }
    table[index] += 1; // moves across the table to tally if conditions are met 
  }
  //loop ends

  return table; // final table is returned
}

let phi = (table) => {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
      (table[0] + table[1]) *
      (table[1] + table[3]) *
      (table[0] + table[2]));
}

let choice = document.getElementById('corr-choice');


//changes image based on variable picked
choice.addEventListener('change', function() {
  let chosenValue = this.value;
  let variableImg = document.getElementById('variable-img');
  variableImg.src = `./images/variables/${chosenValue}.png`;
})

//changes variable icon for variable one (based on picked variable)

let choiceOne = document.getElementById('first-corr-choice');
let choiceTwo = document.getElementById('second-corr-choice');

choiceOne.addEventListener('change', function() {
  let chosenValue = this.value;
  let variableImg = document.getElementById('first-variable-img');
  if (chosenValue === 'brushed-teeth') {
    variableImg.src = `./images/variables/not-brushed-teeth.png`;
  } else {
    variableImg.src = `./images/variables/${chosenValue}.png`;
  }
  
})

choiceTwo.addEventListener('change', function() {
  let chosenValue = this.value;
  let variableImg = document.getElementById('second-variable-img');
  if (chosenValue === 'brushed-teeth') {
    variableImg.src = `./images/variables/not-brushed-teeth.png`;
  } else {
    variableImg.src = `./images/variables/${chosenValue}.png`;
  }
  
})


//attaches a value to chosenVariable => will be used as an argument to tableFor function
//gives result
choice.addEventListener('change', function() {
  //used as argument to tableFor function
  let analysis = document.getElementById('analysis-text');
  let chosenVariable = this.value;
  if (chosenVariable.includes('-')) {
    chosenVariable = chosenVariable.replace('-', ' ');
  }
  let chosenTable = tableFor(chosenVariable, JOURNAL);
  let correlation = phi(chosenTable);

  let finalResult = document.getElementById('result-percentage');
  if (Number.isNaN(correlation)) {
    finalResult.innerText = '';
  } else {
    finalResult.innerText = 'φ = ' + correlation.toFixed(4);

    if (correlation >= -1 && correlation <= -0.7) {
      analysis.innerText = 'strong negative association';
    } else if (correlation >= -0.7 && correlation <= -0.3 ) {
      analysis.innerText = 'weak negative association';
    } else if (correlation >= -0.3 && correlation < 0.3) {
      analysis.innerText = 'little or no association';
    } else if (correlation >= 0.3 && correlation < 0.7) {
      analysis.innerText = 'weak positive association';
    } else if (correlation >= 0.7 && correlation <= 1.0) {
      analysis.innerText = 'strong positive association';
    }


  }
});

// list all events in JOURNAL
function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      //if event is not in the events yet, push
      //ensures that there aren't any duplicate events in the final events array
      if(!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

let allEventsBtn = document.getElementById('all-event-btn');
let allEvents = journalEvents(JOURNAL).sort();
let allEventsWithCorrelation = [];
let significantCorrelations = [];

let variableListDiv = document.getElementById('variable-list');

//log all events with corresponding coefficient values & log significant correlations
for (let event of allEvents) {
  let correlation = phi(tableFor(event, JOURNAL)).toFixed(4);
  if (correlation > 0.1 || correlation < -0.1) {
    significantCorrelations.push([event, correlation]);
  }
  allEventsWithCorrelation.push(`${event}: ${correlation}`);
} 

let count = 0;
allEventsBtn.addEventListener('click', function() {
  count += 1;
  if (count === 1) {
    //make div
    let createDiv = document.createElement('div');
    createDiv.classList.add('item-div');
    createDiv.classList.add('flex');

    for (let entries of allEventsWithCorrelation) {
      // //make text
      let createH4 = document.createElement('h4');
      createH4.classList.add('variable-item');
      let createH4Content = document.createTextNode(entries);
      createH4.appendChild(createH4Content);
      createDiv.appendChild(createH4);
    }
    variableListDiv.appendChild(createDiv);
    let createLine = document.createElement('hr');
    createLine.classList.add('variable-line');
    variableListDiv.appendChild(createLine);

    // create significant div
    for (let entries of significantCorrelations) {
      let eventName = entries[0];
      let significantCorrelation = entries[1];
  
      //main attachment
      let significantDiv = document.getElementById('significant-div');
      // second main attachment
      let createSigDiv = document.createElement('div');
      createSigDiv.classList.add('main-significant-div');
  
      // create first variable
  
      let createFirstVariableDiv = document.createElement('div');
      createFirstVariableDiv.classList.add('flex');
      createFirstVariableDiv.classList.add('variable-div');
  
      let createImg = document.createElement('img');
      createImg.classList.add('first-variable-img');
      if (eventName.includes(' ')) {
        eventName = eventName.replace(' ', '-');
      }
      createImg.src = `./images/variables/${eventName}.png`;
  
      let createFirstVariableText = document.createElement('h4');
      
      if (eventName.includes('-')) {
        eventName = eventName.replace('-', ' ');
      }
  
      let createFirstVariableContent = document.createTextNode(eventName);
      createFirstVariableText.classList.add('sigg-corr-text');
  
      createFirstVariableText.appendChild(createFirstVariableContent);
      createFirstVariableDiv.appendChild(createImg);
      createFirstVariableDiv.appendChild(createFirstVariableText);
      createSigDiv.appendChild(createFirstVariableDiv);
  
      //create arrow div
  
      let createArrowDiv = document.createElement('div');
      createArrowDiv.classList.add('flex');
      createArrowDiv.classList.add('variable-div');
  
      let arrowImg = document.createElement('img');
      arrowImg.classList.add('arrow-img');
      arrowImg.src = `./images/arrow.png`;
  
      let createSigCorr = document.createElement('h4');
      createSigCorr.classList.add('sig-corr-text');
      createSigCorr.classList.add('sig-corr-color');
  
      let createSigCorrContent = document.createTextNode(significantCorrelation);
  
      createSigCorr.appendChild(createSigCorrContent);
      createArrowDiv.appendChild(arrowImg);
      createArrowDiv.appendChild(createSigCorr);
      createSigDiv.appendChild(createArrowDiv);
    
  
      // create second variable
  
      let createSecondVariableDiv = document.createElement('div');
      createSecondVariableDiv.classList.add('flex');
      createSecondVariableDiv.classList.add('variable-div');
  
      let createImg2 = document.createElement('img');
      createImg2.classList.add('second-variable-img');
      createImg2.src = './images/squirrel.png';
  
      let createSecondVariableText = document.createElement('h4');
      createSecondVariableText.classList.add('sig-corr-text');
      let createSecondVariableContent = document.createTextNode('Squirrel Morph');
      createSecondVariableText.appendChild(createSecondVariableContent);
  
      createSecondVariableDiv.appendChild(createImg2);
      createSecondVariableDiv.appendChild(createSecondVariableText);
      createSigDiv.appendChild(createSecondVariableDiv);
      
      //attach
      significantDiv.appendChild(createSigDiv);
    }
  }
})




//creating a new event where jacques ate peanut AND did not brush teeth (!)
let journalCopy = JOURNAL.map(entry => entry);
let runCorrelationBtn = document.getElementById('run-corr-btn');
let resultCorrelation = document.getElementById('str-var-correlation');
let finalAnalysis = document.getElementById('final-analysis');
let winner = document.getElementById('winner');
let winningImg = document.getElementById('winning-img');

let correlationResult;

runCorrelationBtn.addEventListener('click', function() {

  let firstVal = choiceOne.value;
  let secVal = choiceTwo.value;

  for (let entry of journalCopy) {
    if (firstVal.includes('-')) {
      firstVal = firstVal.replace('-',' ');
    }
    if (secVal.includes('-')) {
      secVal = secVal.replace('-', ' ');
    }

    if (firstVal === secVal) {
      resultCorrelation.innerText = 'Pick different values';
      return false;
    }

    if (firstVal === 'brushed teeth') {
      if (!entry.events.includes(firstVal) &&
      entry.events.includes(secVal) ) {
        entry.events.push(`${firstVal} ${secVal}`);
      }
    }

    if (secVal === 'brushed teeth') {
      if (entry.events.includes(firstVal) &&
      !entry.events.includes(secVal) ) {
        entry.events.push(`${firstVal} ${secVal}`);
      }
    }

    if (firstVal !== 'brushed teeth' && secVal !== 'brushed teeth') {
      if (entry.events.includes(firstVal) &&
      entry.events.includes(secVal) ) {
        entry.events.push(`${firstVal} ${secVal}`);
      }
    }
  }

  correlationResult = phi(tableFor(`${firstVal} ${secVal}`, journalCopy));

  if (Number.isNaN(correlationResult)) {
    resultCorrelation.innerText =  'Events did not occur together';

  } else if (!(Number.isNaN(correlationResult))) {
    resultCorrelation.innerText = 'φ = ' + correlationResult.toFixed(3);
    finalAnalysis.innerText = '';
  }

  if (correlationResult === 1) {
    winner.innerText = 'WINNER! We found the culprit! When Jacques eats peanuts and doesn\'t brush his teeth that day, he turns into a squirrel.';
    winningImg.src = './images/variables/winner.png';
  } else {
    winner.innerText = '';
    winningImg.src = '';
  }

})


//output result
runCorrelationBtn.addEventListener('click', function() {

  let firstVal = choiceOne.value;
  let secVal = choiceTwo.value;

  if (firstVal === secVal) {
    finalAnalysis.innerText = '';
  }

  if (firstVal !== secVal) {
    if (correlationResult >= -1 && correlationResult <= -0.7) {
      finalAnalysis.innerText = 'strong negative association';
    } else if (correlationResult >= -0.7 && correlationResult <= -0.3 ) {
      finalAnalysis.innerText = 'weak negative association';
    } else if (correlationResult >= -0.3 && correlationResult < 0.3) {
      finalAnalysis.innerText = 'little or no association';
    } else if (correlationResult >= 0.3 && correlationResult < 0.7) {
      finalAnalysis.innerText = 'weak positive association';
    } else if (correlationResult >= 0.7 && correlationResult <= 1.0) {
      finalAnalysis.innerText = 'strong positive association';
    }
  }

})