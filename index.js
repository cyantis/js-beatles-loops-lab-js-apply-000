const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(who, what){
  var theBeatlesInstruments = [];
  for(let i = 0; i < musicians.length; i ++){
    theBeatlesInstruments.push(who[i] + " plays " + what[i]);
}
  return theBeatlesInstruments;
}