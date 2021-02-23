import axios from 'axios';
const KEY = 'AIzaSyAKhz4y6iop6gD_LCTJ2XdiF9WxwP9FFDw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        key: KEY,
        type: 'video',
        part: 'snippet',
        maxResults: 15,
    }
})