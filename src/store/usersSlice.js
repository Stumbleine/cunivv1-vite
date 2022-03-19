import { createSlice } from '@reduxjs/toolkit';
import datausers from '../json/users.json';
const initialState = {
	users: datausers,
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		sayHello: (state) => {
			console.log('hello');
		},
	},
});

export const { sayHello } = usersSlice.actions;
export default usersSlice.reducer;
