function theBeatlesPlay(who, what){
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var theBeatlesInstruments = [];
  for(i = 0; i < musicians.length; i++){
    theBeatlesInstruments.push(who[i] + " plays the " + what[i]);
}
  return theBeatlesInstruments;
}

//var theBeatles = theBeatlesPlay(musicians, instruments);