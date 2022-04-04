import { useState } from 'react'
import Player from './components/Player'
import Song from './components/Song'
import chillHop from './data'

// Styles
import './styles/app.scss'

function App() {
  const [songs, setSongs] = useState(chillHop())
  const [currentSong, setCurrentSong] = useState(songs[0])
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong}/>
    </div>
  )
}

export default App
