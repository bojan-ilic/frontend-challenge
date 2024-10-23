import { configureStore } from '@reduxjs/toolkit';
import marbleReducer from './marbleSlice';

const store = configureStore({
	reducer: {
		marble: marbleReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
