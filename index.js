function theBeatlesPlay(who, what){
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var theBeatlesInstruments = [];
  for(i = 0; i < musicians.length; i++){
    theBeatlesInstruments.push(who[i] + " plays the " + what[i]);
}
  return theBeatlesInstruments;
}

var theBeatles = theBeatlesPlay(musicians, instruments);