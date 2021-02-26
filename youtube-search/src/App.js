import React from 'react';
import './App.css';
import SearchBarContainer from './components/Searchbar/SearchBarContainer';
import VideoListContainer from './components/VideoList/VideoListContainer';

const App = (props) => {
  return (
    <div className="App">
      <SearchBarContainer />
      <VideoListContainer />
    </div>
  );
}

export default App;
