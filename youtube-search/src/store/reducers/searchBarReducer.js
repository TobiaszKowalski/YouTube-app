import youtube from '../../API/youtube';

const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const UPDATE_VIDEOS = 'UPDATE_VIDEOS';
const KEY = 'AIzaSyCmrXEVre-Q2vgWt2zrYHgCrm73xuUjDIk';

const initialState = {
    videos: [],
    searchTerm: '',
};

export const setSearchValue =(searchValue) => ({
    type: SET_SEARCH_VALUE,
    payload: searchValue,
})

/*export const sendQuery = (searchTerm) => {
    const handleSubmit = async (searchTerm) => {
             await youtube.get('search', {
            params: {
                key: KEY,
                type: 'video',
                part: 'snippet',
                maxResults: 15,
                q: searchTerm,
            }
        }).then((response) => {
            updateVideos(response.data.items)
        })
    }
    handleSubmit(searchTerm);
}*/

const updateVideos = (data) => {
    return {type: UPDATE_VIDEOS, payload: data}
}

export const getVideosThunkCreator = (searchTerm) => {
    return (dispatch) => {
     youtube.get('search', {
           params: {
               key: KEY,
               type: 'video',
               part: 'snippet',
               maxResults: 15,
               q: searchTerm,
           }
       }).then((response) => {
           dispatch(updateVideos(response.data.items)) 
       })
    }
}

const searchBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchTerm: action.payload,
            }
        case UPDATE_VIDEOS:
            //console.log(action.payload)
            return {
                ...state,
                videos: action.payload
            }
        default:
            return state;
    };
    
};

export default searchBarReducer;