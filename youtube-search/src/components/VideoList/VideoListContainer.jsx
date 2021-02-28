import React from 'react';
import {connect} from 'react-redux';
import VideoList from './VideoList';

let mapStateToProps = (state) => {
    return {
        videos: state.searchBarReducer.videos
    }
}


const VideoListContainer = connect(mapStateToProps)(VideoList);

export default VideoListContainer;