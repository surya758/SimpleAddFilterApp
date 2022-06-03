import { Pressable, Text } from "react-native";

import React from "react";
import styles from "./styles";

const CategoryBox = ({ category, onPress }) => {
	return (
		<Pressable style={styles.container} onPress={() => onPress(category)}>
			<Text style={styles.title}>{category.toUpperCase()}</Text>
		</Pressable>
	);
};

export default CategoryBox;
