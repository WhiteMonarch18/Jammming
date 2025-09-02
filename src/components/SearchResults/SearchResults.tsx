

import './SearchResults.css';

import TrackList from '../TrackList/TrackList';

function SearchResults() {
    return (
        <div className="searchResultsWrapper">
            <h2>Results</h2>
            <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
        </div>
    )
}

export default SearchResults;