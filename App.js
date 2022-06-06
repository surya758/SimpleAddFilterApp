import "react-native-gesture-handler";

import * as React from "react";

import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import RootNav from "./src/navigation/RootNav";
import fonts from "./src/styles/fonts";
import { store } from "./src/redux/store";
import { useFonts } from "@expo-google-fonts/source-sans-pro";

const App = () => {
	let [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<Provider store={store}>
			<RootNav />
		</Provider>
	);
};

export default App;
