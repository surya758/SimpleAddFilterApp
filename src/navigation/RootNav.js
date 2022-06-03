import * as React from "react";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const RootNav = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Login'
				screenOptions={{ headerShown: false, gestureEnabled: false }}
			>
				<Stack.Screen name='Login' component={LoginScreen} />
				<Stack.Screen name='Home' component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNav;
