import { Alert } from "react-native";

export const showAlert = (errTitle, errMsg) => {
	Alert.alert(errTitle, errMsg, [
		{
			text: "OK",
			onPress: () => {},
		},
	]);
};
