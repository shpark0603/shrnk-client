import axios from 'axios';

const PERSIST_LOCALSTORAGE = 'userURL/PERSIST_LOCALSTORAGE';
const TOGGLE_ERROR = 'userURL/TOGGLE_ERROR';
const TOGGLE_LOADING = 'userURL/TOGGLE_LOADING';

const initialState = {
  error: null,
  loading: false
};

export const persistLocalStorage = hashes => async dispatch => {
  dispatch({ type: TOGGLE_ERROR });
  dispatch({ type: TOGGLE_LOADING });

  try {
    const res = await axios.post('/api/urls/batch', { hashes });

    if (res.status >= 400) {
      throw new Error(res.message);
    }

    localStorage.setItem('hashes', '[]');

    dispatch({ type: PERSIST_LOCALSTORAGE, payload: res.data });
  } catch (error) {
    dispatch({ type: TOGGLE_ERROR, payload: error.response.data });
  } finally {
    dispatch({ type: TOGGLE_LOADING });
  }
};

const userURLReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ERROR:
      if (action.payload) {
        return {
          ...state,
          error: action.payload
        };
      }

      return {
        ...state,
        error: null
      };

    case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading
      };
    default:
      return state;
  }
};

export default userURLReducer;
