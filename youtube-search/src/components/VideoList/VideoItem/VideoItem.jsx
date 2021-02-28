import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';
import {PermIdentity, DateRange} from '@material-ui/icons';

const VideoItem = (props) => {
    let videoSrc = `https://www.youtube.com/watch/${props.video.id.videoId}`
    let timeSnippet = props.video.snippet.publishedAt.slice(0, 10)
    return (
        <Grid justify = 'center' container>
            <Grid container item spacing={2}>
                <Paper align={'center'} elevation={6} style = {{padding: '10px', height: '60vh'}}>
                    <img src={props.video.snippet.thumbnails.medium.url} alt='' />  
                    <Typography variant = 'subtitle1'>
                        <a style = {{color: '#673AB7'}} href={videoSrc} target='_blank'>
                            {props.video.snippet.title}
                        </a>
                    </Typography>
                    <Typography variant = 'subtitle1'>
                        <Grid container >
                            <Grid item xs={4}>
                                <PermIdentity />
                            </Grid>
                            <Grid item xs={8}>
                                <Typography noWrap>
                                    {props.video.snippet.channelTitle}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <DateRange />
                            </Grid>
                            <Grid item xs={8}>
                                <time>{timeSnippet}</time>
                            </Grid>
                        </Grid>
                    </Typography>
                    <Typography  align={'left'} variant = 'subtitle2'>
                        {props.video.snippet.description}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default VideoItem;