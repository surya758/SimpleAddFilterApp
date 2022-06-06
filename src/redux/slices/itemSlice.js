import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const itemFavSlice = createSlice({
	name: "itemFavList",
	initialState: initialState,
	reducers: {
		addItemToFavList: (state, action) => {
			state.push(action.payload.item);
		},
		removeItemFromFavList: (state, action) => {
			return state.filter((item) => item.id !== action.payload.id);
		},
	},
});

export const { addItemToFavList, removeItemFromFavList } = itemFavSlice.actions;

export const selectFavItemList = (state) => state.itemFavList;
export default itemFavSlice.reducer;
