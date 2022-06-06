import { Platform, StatusBar } from "react-native";

import { Colors } from "../styles";
import FavouriteScreen from "../screens/FavouriteScreen";
import ItemScreen from "../screens/ItemScreen";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 45 : StatusBar.currentHeight;

const screenOptions = {
	tabBarStyle: { backgroundColor: Colors.BLACK },
	tabBarActiveTintColor: Colors.WHITE,
	tabBarLabelStyle: { fontFamily: "SourceSansPro_700Bold" },
};

const HomeNav = () => {
	return (
		<Tab.Navigator
			style={{
				paddingTop: STATUSBAR_HEIGHT,
				backgroundColor: Colors.BLACK,
			}}
			screenOptions={screenOptions}
		>
			<Tab.Screen name='Item' component={ItemScreen} options={{ tabBarLabel: "LIST OF ITEMS" }} />
			<Tab.Screen name='Favourite' component={FavouriteScreen} />
		</Tab.Navigator>
	);
};

export default HomeNav;
