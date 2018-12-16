import { typeKeys } from './types';
import { all, takeLatest, fork, put } from 'redux-saga/effects';
import { signInSuccess, signInFail, signOutSuccess } from './actions';
import axios from 'axios';

// const API_ENDPOINT = '/auth/local';

function* handleLogin(action: any) {
    try {
        // To call async functions, use redux-saga's `call()`.
        const res = yield axios.post('/api/login', action.payload);

        if (res.error) {
          console.log('ouch1');
          yield put(signInFail(res.error));
        } else {
          yield put(signInSuccess(res));
        }
      } catch (err) {
        console.log('ouch2');
        if (err instanceof Error) {
          yield put(signInFail(err.stack!));
        } else {
          yield put(signInFail('An unknown error occured.'));
        }
      }
}

function* handlelogout(action: any) {
  try {
      // To call async functions, use redux-saga's `call()`.
      yield put(signOutSuccess(''));

    } catch (err) {
      console.log('ouch2');
      if (err instanceof Error) {
        yield put(signInFail(err.stack!));
      } else {
        yield put(signInFail('An unknown error occured.'));
      }
    }
}

function* watchFetchRequest() {
    yield takeLatest(typeKeys.SIGNIN, handleLogin);
    yield takeLatest(typeKeys.SIGNOUT, handlelogout);
  }
  
  // We can also use `fork()` here to split our saga into multiple watchers.
function* loginSaga() {
yield all([fork(watchFetchRequest)]);
}
  
export default loginSaga;