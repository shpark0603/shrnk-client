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
  if (
    originalURL.trim() === '' ||
    !originalURL
      .trim()
      .match(
        /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/
      )
  ) {
    dispatch({
      type: TOGGLE_ERROR,
      payload: { message: 'URL 형식이 아닙니다. 정확한 URL을 입력해주세요.' }
    });
    return;
  }

  dispatch({ type: TOGGLE_LOADING });
  dispatch({ type: TOGGLE_ERROR });

  try {
    const res = await axios.post('/api/urls/public', {
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
