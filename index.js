const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(who, what){
  var theBeatlesInstruments = [];
  for(var i = 0; counter < musicians.length; i ++){
    theBeatlesInstruments.push(who[i] + " plays the " + what[i]);
}
  return theBeatlesInstruments;
}