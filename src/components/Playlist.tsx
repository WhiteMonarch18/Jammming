
import SaveToSpotify from "./SaveToSpotify";

function Playlist() {
    return (
        <div className="playlistWrapper">
            <h2>Your Playlist</h2>
            {/* Render the list of songs in the playlist */}
            <SaveToSpotify />
        </div>
    )
}

export default Playlist;