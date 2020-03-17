import axios from 'axios';

const CREATE = 'publicURL/CREATE';
const TOGGLE_ERROR = 'publicURL/TOGGLE_ERROR';
const TOGGLE_LOADING = 'publicURL/TOGGLE_LOADING';

const initialState = {
  hashes: JSON.parse(localStorage.getItem('hashes')) || [],
  error: null,
  loading: false
};

export const createPublicURL = originalURL => async dispatch => {
  dispatch({ type: TOGGLE_LOADING });
  dispatch({ type: TOGGLE_ERROR });

  try {
    const res = await axios.post('http://localhost:5000/api/urls/public', {
      originalURL
    });

    if (res.status >= 400) {
      throw new Error(res.data);
    }

    dispatch({ type: CREATE, payload: res.data });
  } catch (err) {
    dispatch({ type: TOGGLE_ERROR, payload: err.response.data });
  } finally {
    dispatch({ type: TOGGLE_LOADING });
  }
};

const publicURLReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      if (state.hashes.find(hash => hash.id === action.payload.id)) {
        return {
          ...state,
          hashes: [
            action.payload,
            ...state.hashes.filter(hash => hash.id !== action.payload.id)
          ]
        };
      }

      return {
        ...state,
        hashes: [action.payload, ...state.hashes]
      };

    case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading
      };

    case TOGGLE_ERROR:
      if (action.payload) {
        return { ...state, error: action.payload };
      }

      return { ...state, error: null };

    default:
      return state;
  }
};

export default publicURLReducer;
