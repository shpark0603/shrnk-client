import axios from 'axios';

const LOGIN = 'auth/LOGIN';
const LOGOUT = 'auth/LOGOUT';
const SIGNUP = 'auth/SIGNUP';
const TOGGLE_ERROR = 'auth/TOGGLE_ERROR';
const TOGGLE_LOADING = 'auth/TOGGLE_LOADING';

const initialState = {
  user: null,
  loading: false,
  error: null
};

export const login = ({ email, password }) => async dispatch => {
  dispatch({ type: TOGGLE_LOADING });
  dispatch({ type: TOGGLE_ERROR });

  try {
    const res = await axios.post(
      'http://localhost:5000/api/users/login',
      {
        email,
        password
      },
      { withCredentials: true }
    );

    if (res.status >= 400) {
      throw new Error(res.data);
    }

    dispatch({ type: LOGIN, payload: res.data });
  } catch (error) {
    dispatch({ type: TOGGLE_ERROR, payload: error.response.data });
  } finally {
    dispatch({ type: TOGGLE_LOADING });
  }
};

export const logout = () => async dispatch => {
  await axios.get('http://localhost:5000/api/users/logout', {
    withCredentials: true
  });

  dispatch({ type: LOGOUT });
};

export const signup = ({
  name,
  email,
  password,
  confirmPassword
}) => async dispatch => {
  dispatch({ type: TOGGLE_LOADING });
  dispatch({ type: TOGGLE_ERROR });

  try {
    const res = await axios.post(
      'http://localhost:5000/api/users/signup',
      {
        name,
        email,
        password,
        confirmPassword
      },
      { withCredentials: true }
    );

    if (res.status >= 400) {
      throw new Error(res.data);
    }

    dispatch({ type: SIGNUP, payload: res.data });
  } catch (error) {
    dispatch({ type: TOGGLE_ERROR, payload: error.response.data });
  } finally {
    dispatch({ type: TOGGLE_LOADING });
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload
      };

    case LOGOUT:
      return {
        ...state,
        user: null
      };

    case SIGNUP:
      return {
        ...state,
        user: action.payload
      };

    case TOGGLE_ERROR:
      if (action.payload) {
        return { ...state, error: action.payload };
      }
      return { ...state, error: null };

    case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading
      };

    default:
      return state;
  }
};

export default authReducer;
