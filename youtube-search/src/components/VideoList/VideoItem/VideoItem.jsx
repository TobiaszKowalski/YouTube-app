import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';

const VideoItem = (props) => {
    let videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`
    return (
        <Grid justify = 'center' container>
            <Grid container item spacing={2} style = {{height: '60vh'}}>
                <Paper elevation={6} style = {{padding: '10px'}}>
                    <img src={props.video.snippet.thumbnails.medium.url} alt='' />  
                    <Typography variant = 'subtitle1'>
                        <a href={videoSrc} target='_blank'>
                            {props.video.snippet.title}
                        </a>
                    </Typography>
                    <Typography variant = 'subtitle1'>
                        {props.video.snippet.channelTitle}
                    </Typography>
                    <Typography variant = 'subtitle1'>
                        <time>{props.video.snippet.publishedAt}</time>
                    </Typography>
                    <Typography variant = 'subtitle1'>
                        {props.video.snippet.description}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default VideoItem;