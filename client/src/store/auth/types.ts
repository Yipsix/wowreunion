export interface SignInSuccessAction {
    readonly type: typeKeys.SIGNIN_SUCCESS;
}

export interface SignInInProgressAction {
    readonly type: typeKeys.SIGNIN;
}

export interface SignInFailAction {
    readonly type: typeKeys.SIGNIN_FAIL;
    readonly payload: {
        readonly error: Error;
    };
}

export interface SignOutSuccessAction {
    readonly type: typeKeys.SIGNOUT_SUCCESS;
}

export interface SignOutInProgressAction {
    readonly type: typeKeys.SIGNOUT;
}

export interface SignOutFailAction {
    readonly type: typeKeys.SIGNOUT_FAIL;
    readonly payload: {
        readonly error: Error;
    };
}

export type ActionTypes =
    | SignInFailAction
    | SignInInProgressAction
    | SignInSuccessAction
    | SignOutFailAction
    | SignOutInProgressAction
    | SignOutSuccessAction;

export enum ActionTypeStates {
    INPROGRESS = 'INPROGRESS',
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL'
}

export enum typeKeys {
    SIGNIN = 'SIGNIN',
    SIGNIN_SUCCESS = 'SIGNIN_SUCCESS',
    SIGNIN_FAIL = 'SIGNIN_FAIL',
    SIGNOUT = 'SIGNOUT',
    SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS',
    SIGNOUT_FAIL = 'SIGNOUT_FAIL'
}

export interface AuthState {
    readonly loading: boolean;
    readonly isAuthenticated: boolean;
    readonly user: string;
}
