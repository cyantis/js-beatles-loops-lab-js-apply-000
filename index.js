function theBeatlesPlay(who, what){
  const theBeatlesInstruments = [];
  for(let i = 0; i < musicians.length; i ++){
    theBeatlesInstruments.push(who[i] + " plays " + what[i]);
}
  return theBeatlesInstruments;
}