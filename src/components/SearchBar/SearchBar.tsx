import { useState, useCallback } from 'react';

import './SearchBar.css';

function SearchBar(props) {
    const [term, setTerm] = useState('');

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);

    return (
        <div className="searchBarWrapper">
            <input placeholder="Enter A Song Title" onChange={handleTermChange} />
            <button className='SearchButton' onClick={search}>Search</button>
        </div>
    );
}

export default SearchBar;