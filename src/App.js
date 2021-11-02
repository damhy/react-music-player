import React, { useState } from 'react';

//import Styles
import './styles/app.scss';

//Adding Components

import Player from './components/Player'
import Song from './components/Song'
//Import Util 
import data from './util'
function App() {
  //State
  const [songs, setSongs] = useState(data())
  const [currentSong,setCurrentSong] = useState(songs[0])
  const [isPlaying,setIsplaying]= useState(false)
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsplaying={setIsplaying}/>
    </div>
  );
}

export default App;
