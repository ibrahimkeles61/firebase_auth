import {
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

export default function LoginScreen() {
	const navigation = useNavigation();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(
		() =>
			auth.onAuthStateChanged((user) => user && navigation.navigate("Home")),
		[]
	);

	const handleLogin = () =>
		auth
			.signInWithEmailAndPassword(email, password)
			// .then((userCredentials) => {
			// 	const user = userCredentials.user;
			// 	console.log("user: ", user.email);
			// })
			.catch((err) => alert(err.message));

	const handleSignUp = () => {
		auth
			.createUserWithEmailAndPassword(email, password)
			// .then((userCredentials) => {
			// 	const user = userCredentials.user;
			// 	console.log("user: ", user.email);
			// })
			.catch((err) => alert(err.message));
	};

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior="padding"
		>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Email"
					style={styles.input}
					value={email}
					onChangeText={(e) => setEmail(e)}
				/>
				<TextInput
					placeholder="Password"
					style={styles.input}
					value={password}
					onChangeText={(e) => setPassword(e)}
					secureTextEntry
				/>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={handleLogin}
				>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[styles.button, styles.outlineButton]}
					onPress={handleSignUp}
				>
					<Text style={styles.outlineButtonText}>Register</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	inputContainer: {
		width: "80%",
	},

	input: {
		backgroundColor: "white",
		borderRadius: 10,

		marginTop: 5,
		paddingHorizontal: 15,
		paddingVertical: 10,
	},

	buttonContainer: {
		width: "60%",
		marginTop: 40,
	},

	button: {
		backgroundColor: "#0782f9",
		borderRadius: 10,

		alignItems: "center",

		padding: 15,
	},

	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "700",
	},

	outlineButton: {
		backgroundColor: "white",

		marginTop: 5,
	},

	outlineButtonText: {
		color: "#0782f9",
		fontSize: 16,
		fontWeight: "700",
	},
});
