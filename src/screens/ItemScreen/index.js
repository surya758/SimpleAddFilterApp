import { addItemToFavList, selectFavItemList } from "../../redux/slices/itemSlice";
import { useDispatch, useSelector } from "react-redux";

import Item from "../../components/Item";
import React from "react";
import { ScrollView } from "react-native";
import { View } from "react-native";
import data from "../../data/dataSet";
import { showAlert } from "../../utils/alert";
import styles from "./styles";

const ItemScreen = () => {
	const favList = useSelector(selectFavItemList);
	const dispatch = useDispatch();

	// adding item to fav list
	const addItemToList = (item) => {
		if (favList.includes(item)) {
			return showAlert("Already exists!", "Item that you are adding already exits.");
		}
		dispatch(addItemToFavList({ item }));
		showAlert("Added!", "Item is added successfully");
	};

	return (
		<ScrollView style={styles.container}>
			<View style={styles.itemView}>
				{data.images.map((item) => {
					return <Item item={item} onPress={addItemToList} screen='itemList' key={item.id} />;
				})}
			</View>
		</ScrollView>
	);
};

export default ItemScreen;
