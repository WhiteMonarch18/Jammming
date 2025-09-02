import { useState, useEffect } from 'react';

function SearchResults() {
    const [songs, setSong] = useState([{
        name: 'Demo Name',
        artist: 'Artist Name',
        album: 'Album Name',
        date: 'date released'
    }])
    
    const newSong = {
        name: 'New Song',
        artist: 'New Artist',
        album: 'New Album',
        date: 'New Date'
    }

    useEffect(() => {
        setSong((prevSongs) => [...prevSongs, newSong])
    }, [])

    return (
        <div className="searchResultsWrapper">
            {songs.map((song, index) => (
                <div key={index} className="song">
                    <h3>{song.name}</h3>
                    <p>{song.artist}</p>
                    <p>{song.album}</p>
                    <p>{song.date}</p>
                </div>
            ))}
        </div>
    )
}

export default SearchResults;