import { action } from 'typesafe-actions';
import { typeKeys } from './types';

export const signIn = (user: string, pass: string) => action(typeKeys.SIGNIN, {user, pass});
export const signInSuccess = (message: string) => action(typeKeys.SIGNIN_SUCCESS, message);
export const signInFail = (message: string) => action(typeKeys.SIGNIN_FAIL, message);

export const signOut = () => action(typeKeys.SIGNOUT);
export const signOutSuccess = (message: string) => action(typeKeys.SIGNOUT_SUCCESS, message);
export const signOutFail = (message: string) => action(typeKeys.SIGNOUT_FAIL, message);