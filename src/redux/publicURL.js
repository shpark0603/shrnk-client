const CREATE = 'publicURL/CREATE';
const LOAD_LOCAL_STORAGE = 'publicURL/LOAD_LOCAL_STORAGE';

const initialState = {
  shortenedURLs: [],
};

export const createPublicURL = publicURL => ({
  type: CREATE,
  payload: publicURL,
});

export const loadPublicURLFromLS = publicURLs => ({
  type: LOAD_LOCAL_STORAGE,
  payload: publicURLs,
});

const publicURLReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        shortenedURLs: [action.payload, ...state.shortenedURLs],
      };
    case LOAD_LOCAL_STORAGE:
      return {
        ...state,
        shortenedURLs: [...action.payload, ...state.shortenedURLs],
      };
    default:
      return state;
  }
};

export default publicURLReducer;
