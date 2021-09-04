import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { authReducer, AUTH_STATE_NAME } from "../components/auth.module/state/auth.reducers";
import { AuthState } from "../components/auth.module/state/auth.state";

export interface AppState {
    [AUTH_STATE_NAME]: AuthState;
    router: RouterReducerState;
  }
  
  export const appReducer = {
    [AUTH_STATE_NAME]: authReducer,
    router: routerReducer
  };