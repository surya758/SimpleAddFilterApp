import { Text, TouchableOpacity } from "react-native";

import React from "react";
import styles from "./styles";

const CustomButtonComponent = ({ value, onPress }) => {
	return (
		<TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
			<Text style={styles.buttonTextStyle}>{value}</Text>
		</TouchableOpacity>
	);
};

export default CustomButtonComponent;
