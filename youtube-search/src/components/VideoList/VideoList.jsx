import React from 'react';
import Carousel from 'react-elastic-carousel';
import VideoItem from './VideoItem/VideoItem';
import {Grid} from '@material-ui/core';

const VideoList = (props) => {

    const renderedVideos = props.videos.map(
        (video) => {
            return <VideoItem key={video.id.videoId} video={video} />
        }
    )
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2, itemsToScroll: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},
    ]
    const itemPadding = [20];

    if (props.videos.length === 0) {
        return (
            <Grid></Grid>
        )
    } else {
        return (
            <Grid>
                <Carousel showArrows={false} itemPadding={itemPadding} breakPoints={breakPoints}>       
                    {renderedVideos}
                </Carousel>
            </Grid>
        )
    }

}

export default VideoList;