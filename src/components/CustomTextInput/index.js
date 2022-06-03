import React, { useState } from "react";
import { TextInput, View } from "react-native";

import { Colors } from "../../styles";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const CustomTextInput = ({ placeholder, setter, value }) => {
	const [focus, setFocus] = useState(false);
	return (
		<View>
			<TextInput
				placeholder={placeholder}
				value={value}
				onChangeText={setter}
				placeholderTextColor={Colors.GRAY_DARK}
				style={styles(value, focus).textInput}
				onFocus={() => setFocus(true)}
				autoCapitalize='none'
				autoFocus={placeholder === "Email" ? true : false}
			/>
			{value ? (
				<Ionicons
					name='ios-close'
					size={22}
					color='white'
					style={styles().icon}
					onPress={() => setter("")}
				/>
			) : null}
		</View>
	);
};

export default CustomTextInput;
