
import SearchBar from './components/SearchBar'
import SearchButton from './components/SearchButton';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import './App.css'

function App() {
  

  return (
    <>
      <form className='header'>
        <h1 className='title'>JA<span className='mSpan'>MMM</span>ING</h1>
        <SearchBar />
        <SearchButton />
      </form>
      <div className="lists">
        <SearchResults />
        <Playlist />
      </div>
    </>
  )
}

export default App
