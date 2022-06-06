import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

import CustomButtonComponent from "../../components/CustomButtonComponent";
import CustomTextInput from "../../components/CustomTextInput";
import { StatusBar } from "expo-status-bar";
import { showAlert } from "../../utils/alert";
import { signIn } from "../../redux/slices/authSlice";
import styles from "./styles";
import { useDispatch } from "react-redux";

const LoginScreen = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	// sign in handler
	const handleSignIn = () => {
		// if username or password empty then show alert
		if (username === "" || password === "") {
			return showAlert("Enter credentials", "Your username or password is empty");
		}

		// build user object
		const user = {
			username: username,
			password: password,
		};

		// dispatch the sign in action with user object
		dispatch(signIn({ user }));

		// reset
		setUsername("");
		setPassword("");
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
