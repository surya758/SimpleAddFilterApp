import { Image, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styles from "./styles";

const Item = ({ item, onPress }) => {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: item.url,
				}}
				style={styles.itemImage}
			/>
			<Text style={styles.itemTitleText}>{item.name.toUpperCase()}</Text>
			<Ionicons
				name='trash'
				size={24}
				color='black'
				style={styles.trashIcon}
				onPress={() => onPress(item.id)}
			/>
		</View>
	);
};

export default Item;
