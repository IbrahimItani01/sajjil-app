import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import tasksReducer from "./slices/tasks.slice";
export const makeStore = () => {
	return configureStore({
		reducer: {
			auth: authReducer,
			tasks: tasksReducer,
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
