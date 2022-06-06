import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/dataSet";
const initialState = { isLoggedIn: false, user: null };

const authSlice = createSlice({
	name: "userAuth",
	initialState,
	reducers: {
		signIn: (state, action) => {
			state.user = data.users.find((user) => {
				return (
					user.username === action.payload.user.username &&
					user.password === action.payload.user.password
				);
			});
			state.isLoggedIn = true;
		},
		signOut: (state) => {
			state.user = null;
			state.isLoggedIn = false;
		},
	},
});

export const { signIn, signOut } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;
export const selectUser = (state) => state.userAuth.user;

export default authSlice.reducer;
