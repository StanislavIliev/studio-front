import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { AuthReducer } from "../auth.module/state/auth.reducer";
import { AUTH_STATE_NAME } from "../auth.module/state/auth.selector";
import { AuthState } from "../auth.module/state/auth.state";
import { SharedReducer } from "./Shared/shared.reducer";
import { SHARED_STATE_NAME } from "./Shared/shared.selector";
import { SharedState } from "./Shared/shared.state";

export interface AppState{
    [SHARED_STATE_NAME]: SharedState;
    [AUTH_STATE_NAME]: AuthState;
    router: RouterReducerState;
}

export const appReducer = {
[SHARED_STATE_NAME]: SharedReducer,
[AUTH_STATE_NAME]: AuthReducer,
router: routerReducer
}