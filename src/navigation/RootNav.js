import * as React from "react";

import HomeNav from "./HomeNav";
import LoginScreen from "../screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { selectIsLoggedIn } from "../redux/slices/authSlice";
import { useSelector } from "react-redux";

const RootNav = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	return <NavigationContainer>{isLoggedIn ? <HomeNav /> : <LoginScreen />}</NavigationContainer>;
};

export default RootNav;
