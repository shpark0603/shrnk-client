const CREATE = 'publicURL/CREATE';

const initialState = {
  publicURLs: [],
};

export const createPublicURL = publicURL => ({
  type: CREATE,
  payload: publicURL,
});

const publicURLReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        publicURLs: [action.payload, ...state.publicURLs],
      };

    default:
      return state;
  }
};

export default publicURLReducer;
