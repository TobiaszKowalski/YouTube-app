import React from 'react';
import { Grid } from '@material-ui/core';
import SearchBarContainer from './components/Searchbar/SearchBarContainer';
import VideoListContainer from './components/VideoList/VideoListContainer';

const App = (props) => {
  return (
        <Grid justify = 'center' container spacing = {10}>
          <Grid item xs={6}>
            <SearchBarContainer />
          </Grid>
          <Grid justify = 'center' container spacing = {10}>
            <Grid item xs={11}>
              <VideoListContainer />
            </Grid>
          </Grid>
        </Grid>
  );
}

export default App;
