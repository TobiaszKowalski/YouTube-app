import React from 'react';
import {connect} from 'react-redux';
import VideoList from './VideoList';

let mapStateToProps = (state) => {
    return {
        videos: state.searchBarReducer.videos
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
 
    }
}*/

const VideoListContainer = connect(mapStateToProps)(VideoList);

export default VideoListContainer;