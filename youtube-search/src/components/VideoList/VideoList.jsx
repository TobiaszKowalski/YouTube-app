import React from 'react';
import VideoItem from './VideoItem/VideoItem';

const VideoList = (props) => {

    const renderedVideos = props.videos.map(
        (video) => {
            return <VideoItem key={video.id.videoId} video={video} />
        }
    )
    
    return (
        <div>{renderedVideos}</div>
    )
}

export default VideoList;