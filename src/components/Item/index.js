import { Image, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styles from "./styles";

const Item = ({ item, onPress, screen }) => {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: item.url,
				}}
				style={styles.itemImage}
			/>
			<View>
				<Text style={styles.itemTitleText}>{item.name.toUpperCase()}</Text>
				{screen === "itemList" ? (
					<Text style={styles.itemCategoryText}>{item.category.slice(0, -1).toUpperCase()}</Text>
				) : null}
			</View>
			<Ionicons
				name={screen === "fav" ? "trash" : "add"}
				size={24}
				color='black'
				style={styles.trashIcon}
				onPress={() => onPress(item)}
			/>
		</View>
	);
};

export default Item;
