import { configureStore } from '@reduxjs/toolkit';
import offersReducer from './offersSlice';
import usersReducer from './usersSlice';

export default configureStore({
	reducer: {
		offers: offersReducer,
		users: usersReducer,
	},
});
