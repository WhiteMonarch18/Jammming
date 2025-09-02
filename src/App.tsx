
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import './App.css'

function App() {
  

  return (
    <>
      <form className='header'>
        <h1 className='title'>JA<span className='mSpan'>MMM</span>ING</h1>
        <SearchBar />
      </form>
      <div className="lists">
        <SearchResults />
        <Playlist />
      </div>
    </>
  )
}

export default App
