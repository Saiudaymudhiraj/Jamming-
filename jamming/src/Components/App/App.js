
import App from './App.css';
import {Playlist} from './Components/Playlist/playlist';
import {SearchBar} from './Components/SearchBar/SearchBar';
import {SearchResults} from './Components/SearchBar/SearchBar';

function App() {
  return (
    <div>
  <SearchBar />
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
       <div className="App-playlist">
         <SearchResults />
         <Playlist />
    </div>
  </div>
</div>
  );
}

export default App;
