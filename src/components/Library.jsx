import LibrarySong from "./LibrarySong"

export default function Library({ showLibrary, songs, currentSong, handleSongSelected }) {

  return (
    <div className={showLibrary ? 'library active-library' : 'library'}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => 
          <LibrarySong  
            song={song} 
            handleSongSelected={handleSongSelected} 
            currentSong={currentSong} 
            key={song.id}/>
          )}
      </div>
    </div>
  )
}
