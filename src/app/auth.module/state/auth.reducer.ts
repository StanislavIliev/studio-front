import { createReducer , on } from "@ngrx/store";
import { autoLogout, loginSuccess, registerSuccess } from "./auth.actions";
import { initialState } from "./auth.state";

const _authReducer = createReducer(
  initialState,
   on(loginSuccess, (state, action) => {
  return {
    ...state,
    user: action.user,
};
}),
on(registerSuccess, (state, action) => {
  return {
    ...state,
    user: action.user,
};
}),on(autoLogout ,state => {
  return{
    ...state,
    user: null,
  }
})
);

export function AuthReducer(state, action){
  return _authReducer(state,action);
}
