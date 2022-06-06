import {
	Alert,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import React, { useState } from "react";

import CategoryBox from "../../components/CategoryBox";
import { Ionicons } from "@expo/vector-icons";
import Item from "../../components/Item";
import { Picker } from "@react-native-picker/picker";
import { StatusBar } from "expo-status-bar";
import data from "../../data/dataSet";
import styles from "./styles";

const HomeScreen = () => {
	const [selectedItem, setSelectedItem] = useState("");
	const [favList, setFavList] = useState([]);
	const [filteredItemList, setFilteredItemList] = useState([]);
	const [showAll, setShowAll] = useState(true);

	// calc unqiue category
	const CATEGORY = [...new Set(data.images.map((item) => item.category))];

	// show alert
	const showAlert = (errTitle, errMsg) => {
		Alert.alert(errTitle, errMsg, [
			{
				text: "OK",
				onPress: () => {
					// resetting entered item
					setSelectedItem("");
				},
			},
		]);
	};

	// func that add item to fav list if it the entered item is available in dataset
	const itemAvailableHandler = (item) => {
		if (favList.includes(item)) {
			return showAlert("Already exists!", "Item that you are adding already exits.");
		}
		setFavList([...favList, item]);
		showAlert("Added!", "Item is added successfully");
	};

	// func that run if entered item isn't available in dataset
	const itemUnavilableHandler = () => {
		showAlert("Wrong input!", "Item is unavailable");
	};

	// adding item to fav list
	const addItemToList = () => {
		Keyboard.dismiss();
		const item = data.images.find((item) => {
			return item.name === selectedItem;
		});
		item ? itemAvailableHandler(item) : itemUnavilableHandler();
	};

	// delete item form fav list
	const deleteItemFromList = (id) => {
		const newFavList = favList.filter((item) => {
			return item.id !== id;
		});
		setFavList(newFavList);
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
			<SafeAreaView style={styles.container}>
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
							<Text style={styles.clearText}>Clear</Text>
						</TouchableOpacity>
					</View>

					<ScrollView style={styles.itemView}>
						{/*This is where all the available items will reside */}

						{showAll
							? favList.map((item) => {
									return <Item key={item.id} item={item} onPress={deleteItemFromList} />;
							  })
							: filteredItemList.map((item) => {
									return <Item key={item.id} item={item} onPress={deleteItemFromList} />;
							  })}
					</ScrollView>
				</View>
				{/* 


				
				{/* Write an item name */}
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={styles.writeItemView}
				>
					<Picker
						selectedValue={selectedItem}
						onValueChange={setSelectedItem}
						mode='dropdown' // Android only
						style={styles.picker}
					>
						<Picker.Item label='Please select your item' value='Unknown' />
						{data.images.map((item) => {
							return <Picker.Item label={item.name} value={item.name} key={item.name} />;
						})}
					</Picker>

					<TouchableOpacity onPress={addItemToList}>
						<View style={styles.addView}>
							<Ionicons name='add' size={28} color='black' />
						</View>
					</TouchableOpacity>
				</KeyboardAvoidingView>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
};

export default HomeScreen;
