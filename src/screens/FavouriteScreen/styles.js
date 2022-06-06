import { Dimensions, StyleSheet } from "react-native";

import { Colors } from "../../styles";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.BACKGROUND,
		flex: 1,
	},
	topView: {
		margin: 20,
	},
	titleText: {
		fontFamily: "SourceSansPro_700Bold",
		color: Colors.WHITE,
		fontSize: 24,
	},
	itemView: {
		marginTop: 20,
	},
	filterText: {
		marginTop: 20,
		color: Colors.WHITE,
		fontFamily: "SourceSansPro_600SemiBold",
	},
	clearView: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.GRAY_DARK,
		borderRadius: 8,
	},
	clearText: {
		color: Colors.WHITE,
		paddingHorizontal: 10,
		fontFamily: "SourceSansPro_600SemiBold",
	},
	categoryView: { flexDirection: "row", marginTop: 8 },
});

export default styles;
