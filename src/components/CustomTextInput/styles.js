import { Colors } from "../../styles";
import { StyleSheet } from "react-native";

const styles = (value, focus) =>
	StyleSheet.create({
		icon: { position: "absolute", right: 0, bottom: 5 },
		textInput: {
			borderBottomWidth: 1.5,
			borderBottomColor: focus ? (value ? Colors.PRIMARY : Colors.PRIMARY) : Colors.GRAY_DARK,
			paddingBottom: 5,
			paddingRight: 30,
			color: Colors.WHITE,
			fontFamily: "SourceSansPro_400Regular",
		},
	});

export default styles;
