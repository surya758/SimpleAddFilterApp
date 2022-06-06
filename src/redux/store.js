import authSlice from "./slices/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./slices/itemSlice";

export const store = configureStore({
	reducer: {
		userAuth: authSlice,
		itemFavList: itemSlice,
	},
});
