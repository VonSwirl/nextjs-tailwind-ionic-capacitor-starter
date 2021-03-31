import { createSelector } from "reselect";

const getState = (state: any) => state;

export const getHomeItems = createSelector(
	getState,
	(state) => state.homeItems
);
export const getLists = createSelector(getState, (state) => state.lists);
export const getNotifications = createSelector(
	getState,
	(state) => state.notifications
);
export const getSettings = createSelector(getState, (state) => state.settings);
