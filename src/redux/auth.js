const LOGIN = 'auth/LOGIN';
const LOGOUT = 'auth/LOGOUT';

export const loginAC = () => ({ type: LOGIN });
export const logoutAC = () => ({ type: LOGOUT });

const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
