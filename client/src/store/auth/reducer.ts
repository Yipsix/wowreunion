import { Reducer } from 'redux';
import { AuthState, typeKeys } from './types';

// Type-safe initialState!
const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
  user: ''
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case typeKeys.SIGNIN: {
      return { ...state, loading: true };
    }
    case typeKeys.SIGNIN_SUCCESS: {
      return { ...state, loading: false, isAuthenticated: true, user: 'jesper' };
    }
    case typeKeys.SIGNIN_FAIL: {
      return { ...state, loading: false, isAuthenticated: false, user: '' };
    }
    case typeKeys.SIGNOUT: {
      return { ...state, loading: true };
    }
    case typeKeys.SIGNOUT_SUCCESS: {
      return { ...state, loading: false, isAuthenticated: false, user: '' };
    }
    case typeKeys.SIGNOUT_FAIL: {
      return { ...state, loading: false, isAuthenticated: true, user: 'jesper' };
    }
    default: {
      return state;
    }
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as authReducer };
