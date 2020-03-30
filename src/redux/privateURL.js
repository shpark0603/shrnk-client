import axios from 'axios';

const CREATE = 'privateURL/CREATE';
const LOAD = 'privateURL/LOAD';
const DELETE = 'privateURL/DELETE';
const CLEAR = 'privateURL/CLEAR';
const PERSIST_LOCALSTORAGE = 'privateURL/PERSIST_LOCALSTORAGE';
const TOGGLE_ERROR = 'privateURL/TOGGLE_ERROR';
const TOGGLE_LOADING = 'privateURL/TOGGLE_LOADING';

const initialState = {
  hashes: [],
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

    dispatch({ type: PERSIST_LOCALSTORAGE, payload: res.data.newURLs });
  } catch (error) {
    dispatch({ type: TOGGLE_ERROR, payload: error.response.data });
  } finally {
    dispatch({ type: TOGGLE_LOADING });
  }
};

export const createPrivateURL = originalURL => async dispatch => {
  dispatch({ type: TOGGLE_ERROR });
  dispatch({ type: TOGGLE_LOADING });

  try {
    const res = await axios.post('/api/urls', { originalURL });

    if (res.status >= 400) {
      throw new Error(res.message);
    }

    dispatch({ type: CREATE, payload: res.data.newURL });
  } catch (error) {
    dispatch({ type: TOGGLE_ERROR, payload: error.response.data });
  } finally {
    dispatch({ type: TOGGLE_LOADING });
  }
};

export const loadPrivateURL = userId => async dispatch => {
  dispatch({ type: TOGGLE_ERROR });

  dispatch({ type: TOGGLE_LOADING });

  try {
    const res = await axios.get(`/api/users/${userId}/urls`);

    if (res.status >= 400) {
      throw new Error(res.message);
    }

    dispatch({ type: LOAD, payload: res.data });
  } catch (error) {
    dispatch({ type: TOGGLE_ERROR, payload: error.response.data });
  } finally {
    dispatch({ type: TOGGLE_LOADING });
  }
};

export const clearPrivateURL = () => dispatch => {
  dispatch({ type: CLEAR });
};

export const deletePrivateURL = urlId => async dispatch => {
  dispatch({ type: TOGGLE_ERROR });
  dispatch({ type: TOGGLE_LOADING });

  try {
    const res = await axios.delete(`/api/urls/${urlId}`);

    if (res.status >= 400) {
      throw new Error(res.message);
    }

    dispatch({ type: DELETE, payload: urlId });
  } catch (error) {
    dispatch({ type: TOGGLE_ERROR, payload: error.response.data });
  } finally {
    dispatch({ type: TOGGLE_LOADING });
  }
};

const userURLReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        hashes: [...state.hashes, ...action.payload]
      };

    case CREATE:
      return {
        ...state,
        hashes: [action.payload, ...state.hashes]
      };

    case PERSIST_LOCALSTORAGE:
      return {
        ...state,
        hashes: [...action.payload, ...state.hashes]
      };

    case DELETE:
      return {
        ...state,
        hashes: [...state.hashes.filter(hash => hash.id !== action.payload)]
      };

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

    case CLEAR:
      return {
        ...state,
        hashes: []
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
