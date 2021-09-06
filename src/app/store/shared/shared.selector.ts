import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SHARED_STATE_NAME } from "./shared.reducer";
import { SharedState } from "./shared.state";

const  getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);
export const getLoading = createSelector(getSharedState,state => {
 return  state.showLoading;
});

export const getErrorMessage = createSelector(getSharedState, state => {
return state.errorMessage;
});
