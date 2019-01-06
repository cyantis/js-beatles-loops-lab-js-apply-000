function theBeatlesPlay(who, what){
  var theBeatlesInstruments = [];
  for(let i = 0; i < who.length; i ++){
    theBeatlesInstruments.push(`${who[i]} plays ${what[i]}`);
}
  return theBeatlesInstruments;
}

function johnLennonFacts(facts){
  var aboutJohn = [];
  while(let i < facts.length){
    aboutJohn.push(`${facts[i]}!!!`);
    i++
  }
}