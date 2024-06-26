import { createAction, props } from "@ngrx/store";
import { AuthResponse, AuthResponseData } from "src/app/models/auth.responsibledate";
import { User } from "src/app/models/user";

export const LOGIN_START = '[login page] login start';
export const LOGIN_SUCCESS = '[login page] login success';
export const LOGIN_FAIL = '[login page] login fail';

export const AUTO_LOGIN_ACTION = '[auth page]auto login';
export const LOGOUT_ACTION = '[auth page]log out';

export const autoLogin = createAction(AUTO_LOGIN_ACTION);
export const autoLogout = createAction(LOGOUT_ACTION);

export const loginStart = createAction(LOGIN_START,props<{ username:string, password: string }>());
export const loginSuccess = createAction(LOGIN_SUCCESS,props<{ user: User, redirect: boolean }>());
export const loginFail = createAction(LOGIN_FAIL);

export const REGISTER_START = '[auth] register start';
export const REGISTER_SUCCESS = '[auth] register success';
export const REGISTER_FAIL = '[auth] register fail';

export const registerStart = createAction(REGISTER_START, props<{auth: AuthResponse}>());
export const registerSuccess = createAction(REGISTER_SUCCESS, props<{user: AuthResponseData, redirect: boolean}>());
export const registerFail = createAction(REGISTER_FAIL, props<{message: string}>());


export const RESPONSE_PASSWORDS_START = '[auth] response password';
export const RESPONSE_PASSWORDS_SUCCESS = '[auth] response success';
export const RESPONSE_PASSWORDS_FAIL = '[auth] response fail';

export const responsePasswordStart = createAction(RESPONSE_PASSWORDS_START, props<{requestType: string, email: string}>());
export const responsePasswordSuccess = createAction(RESPONSE_PASSWORDS_SUCCESS, props<{message: string}>());
export const responsePasswordFail = createAction(RESPONSE_PASSWORDS_FAIL, props<{message: string}>());



export const EMAIL_FORGOTTEN_PASSWORD = '[auth] email forgotten password';
export const EMAIL_FORGOTTEN_PASSWORD_SUCCESS = '[auth] email forgotten password success';
export const EMAIL_FORGOTTEN_PASSWORD_FAIL = '[auth] email forgotten password fail';

export const requestPaswordStart = createAction(EMAIL_FORGOTTEN_PASSWORD, props<{requestType: string, email: string}>());
export const requestPaswordSuccess = createAction(EMAIL_FORGOTTEN_PASSWORD_SUCCESS, props<{message: string}>());
export const requestPaswordFail = createAction(EMAIL_FORGOTTEN_PASSWORD_FAIL, props<{message: string}>());



export const USER_UPDATE_START = '[auth] update user start';
export const USER_UPDATE_SUCCESS = '[auth] update user success';
export const USER_UPDATE_FAIL = '[auth] update user fail';

export const userUpdateStart = createAction(USER_UPDATE_START , props<{ updatedUser : User }>());
export const userUpdateSuccess = createAction(USER_UPDATE_SUCCESS , props<{ message:string , updatedUser : User }>());;
export const userUpdateFail = createAction(USER_UPDATE_FAIL , props<{ message : string }>());;