import { Colors } from "../../styles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	buttonStyle: {
		backgroundColor: Colors.PRIMARY,
		alignItems: "center",
		borderRadius: 18,
		marginTop: 30,
	},
	buttonTextStyle: {
		paddingVertical: 10,
		fontFamily: "SourceSansPro_400Regular",
	},
});

export default styles;
