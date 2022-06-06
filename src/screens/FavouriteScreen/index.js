import {
	Keyboard,
	ScrollView,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import React, { useState } from "react";
import { removeItemFromFavList, selectFavItemList } from "../../redux/slices/itemSlice";
import { useDispatch, useSelector } from "react-redux";

import CategoryBox from "../../components/CategoryBox";
import Item from "../../components/Item";
import { StatusBar } from "expo-status-bar";
import data from "../../data/dataSet";
import { showAlert } from "../../utils/alert";
import styles from "./styles";

const FavouriteScreen = () => {
	const favList = useSelector(selectFavItemList);
	const dispatch = useDispatch();
	const [filteredItemList, setFilteredItemList] = useState([]);
	const [showAll, setShowAll] = useState(true);

	// calc unqiue category
	const CATEGORY = [...new Set(data.images.map((item) => item.category))];

	// delete item form fav list
	const deleteItemFromList = ({ id }) => {
		dispatch(removeItemFromFavList({ id }));
		const newFilteredList = filteredItemList.filter((item) => {
			return item.id !== id;
		});
		setFilteredItemList(newFilteredList);
		showAlert("Deleted!", "Item has been removed successfully");
	};

	// filter items from list based on chosen category
	const filterItem = (category) => {
		setShowAll(false);
		const newFilteredList = favList.filter((item) => {
			return item.category === category;
		});
		setFilteredItemList(newFilteredList);
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={styles.container}>
				<StatusBar style='light' />

				{/*Item view */}
				<View style={styles.topView} bounces={false}>
					<Text style={styles.titleText}>Favourite Items</Text>

					<Text style={styles.filterText}>Filter by category</Text>
					<View style={styles.categoryView}>
						{CATEGORY.map((category) => {
							return <CategoryBox key={category} category={category} onPress={filterItem} />;
						})}
						<TouchableOpacity onPress={() => setShowAll(true)} style={styles.clearView}>
							<Text style={styles.clearText}>Clear Filter</Text>
						</TouchableOpacity>
					</View>

					<ScrollView style={styles.itemView}>
						{/*This is where all the available items will reside */}
						{showAll
							? favList.map((item) => {
									return (
										<Item key={item.id} item={item} onPress={deleteItemFromList} screen='fav' />
									);
							  })
							: filteredItemList.map((item) => {
									return (
										<Item key={item.id} item={item} onPress={deleteItemFromList} screen='fav' />
									);
							  })}
					</ScrollView>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default FavouriteScreen;
