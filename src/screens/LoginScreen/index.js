import { Alert, SafeAreaView, Text, View } from "react-native";
import React, { useState } from "react";

import CustomButtonComponent from "../../components/CustomButtonComponent";
import CustomTextInput from "../../components/CustomTextInput";
import { StatusBar } from "expo-status-bar";
import data from "../../data/dataSet";
import { signIn } from "../../redux/slices/authSlice";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigation = useNavigation();
	const dispatch = useDispatch();

	// show alert
	const showAlert = (errTitle, errMsg) => {
		Alert.alert(errTitle, errMsg, [
			{
				text: "OK",
				onPress: () => {
					// reset usename and password
					setUsername("");
					setPassword("");
				},
			},
		]);
	};

	// handle invalid credentials during login
	const handleLoginFailure = () => {
		showAlert("Login Failed", "Your username or password is invalid");
	};

	// sign in handler
	const handleSignIn = () => {
		// if username or password empty then show alert
		if (username === "" || password === "") {
			return showAlert("Enter credentials", "Your username or password is empty");
		}
		const user = {
			username: username,
			password: password,
		};

		dispatch(signIn({ user }));
		// const userData = data.users.find((user) => {
		// 	return user.username === username && user.password === password;
		// });
		// userData ? navigation.navigate("Home") : handleLoginFailure();
	};

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='light' />
			<View style={styles.topView}>
				<View style={styles.titleView}>
					<Text style={styles.titleText}>Sign in</Text>
				</View>
				<View style={styles.formView}>
					<CustomTextInput placeholder='Username' setter={setUsername} value={username} />
					<CustomTextInput placeholder='Password' setter={setPassword} value={password} />
				</View>
				<CustomButtonComponent onPress={handleSignIn} value='SIGN IN' />
			</View>
		</SafeAreaView>
	);
};

export default LoginScreen;
