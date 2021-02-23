import React from 'react';

const VideoItem = (props) => {
    return (
        <div>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <div>
                <div>{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem;