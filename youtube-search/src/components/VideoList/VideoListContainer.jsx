import React from 'react';
import {connect} from 'react-redux';
import VideoList from './VideoList';

let mapStateToProps = (state) => {
    return {
        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
 
    }
}

const VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;