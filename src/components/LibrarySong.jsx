export default function LibrarySong({ song, setCurrentSong }) {
  return (
    <div className="library-song" onClick={e => setCurrentSong(song)}>
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
