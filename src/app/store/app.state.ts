import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { authReducer, AUTH_STATE_NAME } from "../auth.module/state/auth.reducer";
import { AuthState } from "../auth.module/state/auth.state";
import { SharedReducer, SHARED_STATE_NAME } from "./Shared/shared.reducer";
import { SharedState } from "./Shared/shared.state";

export interface AppState{
    [SHARED_STATE_NAME]: SharedState;
    [AUTH_STATE_NAME]: AuthState;
    router: RouterReducerState;
}

export const appReducer = {
[SHARED_STATE_NAME]: SharedReducer,
[AUTH_STATE_NAME]: authReducer,
router: routerReducer
}
