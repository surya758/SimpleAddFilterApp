import { Colors } from "../../styles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		backgroundColor: Colors.GRAY_LIGHT,
		height: 80,
		borderRadius: 8,
		flexDirection: "row",
		alignItems: "center",
	},
	itemImage: {
		height: 60,
		width: 60,
		marginLeft: 10,
		borderWidth: 1,
		borderRadius: 4,
		borderColor: Colors.BLACK,
	},
	itemTitleText: {
		fontFamily: "SourceSansPro_600SemiBold",
		color: Colors.PRIMARY,
		marginLeft: 10,
	},
	itemCategoryText: {
		fontFamily: "SourceSansPro_600SemiBold",
		color: Colors.GRAY_DARK,
		marginLeft: 10,
	},
	trashIcon: {
		position: "absolute",
		right: 10,
	},
	info: {},
});

export default styles;
