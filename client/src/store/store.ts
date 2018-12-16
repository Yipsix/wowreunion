import { combineReducers, Dispatch, Action, AnyAction, compose } from 'redux';
import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import loginSaga from './auth/sagas';
import { authReducer } from './auth/reducer';
import { saveReducer } from './bailiffBook/reducer';
import { AuthState } from './auth/types';
import { SaveState } from './bailiffBook/types';
import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

// The top-level state object
export interface ApplicationState {
  auth: AuthState;
  save: SaveState;
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
const rootReducer = combineReducers<ApplicationState>({
  auth: authReducer,
  save: saveReducer
});

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
function* rootSaga() {
  yield all([fork(loginSaga)]);
}

export default function configureStore(initialState: ApplicationState): Store<ApplicationState> {

  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({});
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // We'll create our store with the combined reducers/sagas, and the initial Redux state that
  // we'll be passing from our entry point.
  const store = createStore(rootReducer, initialState,
    composeEnhancers(compose(
      applyMiddleware(sagaMiddleware),
      offline(offlineConfig)
    ))
  );

  // Don't forget to run the root saga, and return the store object.
  sagaMiddleware.run(rootSaga);
  return store;
}