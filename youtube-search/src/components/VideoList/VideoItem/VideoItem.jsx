import React from 'react';

const VideoItem = (props) => {
    return (
        <div>
            <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.description} />
            <div>
                <div>{props.video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem;