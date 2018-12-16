import { Reducer } from 'redux';
import { SaveState, typeKeys } from './types';

// Type-safe initialState!
const initialState: SaveState = {
  savedMessage: false
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<SaveState> = (state = initialState, action) => {
  switch (action.type) {
    case typeKeys.SAVE: {
      return { ...state, savedMessage: true };
    }
    default: {
      return state;
    }
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.

export { reducer as saveReducer };
