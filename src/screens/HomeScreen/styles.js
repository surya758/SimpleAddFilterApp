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
	writeItemView: {
		marginTop: 30,
		position: "absolute",
		bottom: 40,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	input: {
		backgroundColor: Colors.WHITE,
		paddingVertical: 14,
		width: windowWidth * 0.6,
		borderRadius: 20,
		paddingLeft: 6,
		borderWidth: 1,
		borderColor: Colors.PRIMARY,
	},
	addView: {
		height: 60,
		width: 60,
		borderRadius: 60,
		backgroundColor: Colors.WHITE,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: Colors.PRIMARY,
	},
});

export default styles;
