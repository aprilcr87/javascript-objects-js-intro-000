var MyBloodyValentine = 'My Bloody Valentine';
var playlist = new Object ({
  Slowdive:'Alison',
  [MyBloodyValentine]:'Sometimes'
});

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

updatePlaylist(playlist, 'Phil Ochs', 'Here\'s to the State of Mississippi');
