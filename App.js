import "react-native-gesture-handler";

import * as React from "react";

import AppLoading from "expo-app-loading";
import LoginScreen from "./src/screens/LoginScreen";
import RootNav from "./src/navigation/RootNav";
import fonts from "./src/styles/fonts";
import { useFonts } from "@expo-google-fonts/source-sans-pro";

const App = () => {
	let [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return <RootNav />;
};

export default App;
