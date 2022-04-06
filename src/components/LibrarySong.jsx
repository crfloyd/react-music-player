export default function LibrarySong({ song, currentSong, handleSongSelected }) {
  return (
    <div className={`library-song ${song.id === currentSong.id ? 'selected' : ''}`} onClick={e => handleSongSelected(song)}>
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
