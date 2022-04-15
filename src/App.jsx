import { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import chillHop from "./data";

// Styles
import "./styles/app.scss";

function App() {
	const [songs, setSongs] = useState(chillHop());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [showLibrary, setShowLibrary] = useState(false);

	const handleSongSelected = (song) => {
		setSongs(
			songs.map((s) => {
				return { ...s, active: s.id === song.id };
			})
		);
		setCurrentSong(song);
	};

	const handleLibraryClicked = () => {
		setShowLibrary(!showLibrary);
		console.log("library clicked", showLibrary);
	};

	const handleTrackSkipped = (dir) => {
		const currIndex = songs.findIndex((s) => s.id === currentSong.id);
		let nextIndex = currIndex;

		if (dir > 0 && currIndex === songs.length - 1) {
			nextIndex = 0;
		} else if (dir < 0 && currIndex == 0) {
			nextIndex = songs.length - 1;
		} else {
			nextIndex += 1;
		}
		handleSongSelected(songs[nextIndex]);
	};

	return (
		<div className="App">
			<Nav onLibraryClicked={handleLibraryClicked} />
			<Song currentSong={currentSong} />
			<Player
				currentSong={currentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				onTrackSkipped={handleTrackSkipped}
			/>
			<Library
				showLibrary={showLibrary}
				songs={songs}
				currentSong={currentSong}
				handleSongSelected={handleSongSelected}
			/>
		</div>
	);
}

export default App;
