function theBeatlesPlay(who, what){
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var theBeatlesInstruments = [];
  for(counter = 0; counter < musicians.length; counter ++){
    theBeatlesInstruments.push(who[counter] + " plays the " + what[counter]);
}
  return theBeatlesInstruments;
}

var theBeatles = theBeatlesPlay(musicians, instruments);