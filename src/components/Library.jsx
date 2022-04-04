import LibrarySong from "./LibrarySong"

export default function Library({ songs, setCurrentSong }) {

  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => <LibrarySong  song={song} setCurrentSong={setCurrentSong} key={song.id}/>)}
      </div>
    </div>
  )
}
