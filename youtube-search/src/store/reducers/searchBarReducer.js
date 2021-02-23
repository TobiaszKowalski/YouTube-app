import youtube from '../../API/youtube';

const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const SEND_QUERY = 'SEND_QUERY';

const initialState = {
    videos: [],
    searchTerm: '',
};

export const setSearchValue =(searchValue) => ({
    type: SET_SEARCH_VALUE,
    payload: searchValue,
})

export const sendQuery = (searchTerm) => ({
    type: SEND_QUERY,
    payload: searchTerm
})

const searchBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchTerm: action.payload,
            }
        case SEND_QUERY:
            const handleSubmit = async (searchTerm) => {
                const response = await youtube.get('/search', {
                    params: {
                        q: searchTerm
                    }
                })
                state.videos.push(response.data.items)
            }
            handleSubmit(action.payload)
            return {
                ...state
            }
        default:
            return state;
    };
    
};

export default searchBarReducer;