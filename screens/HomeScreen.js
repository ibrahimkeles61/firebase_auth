import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

export default function HomeScreen() {
	const navigation = useNavigation();

	const handleSignOut = () =>
		auth
			.signOut()
			.then(() => navigation.navigate("Login"))
			.catch((err) => alert(err.message));

	return (
		<View style={styles.container}>
			<Text>Email: {auth.currentUser?.email}</Text>

			<TouchableOpacity
				style={styles.button}
				onPress={handleSignOut}
			>
				<Text style={styles.buttonText}>Logout</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	button: {
		width: "60%",
		backgroundColor: "#0782f9",
		borderRadius: 10,

		alignItems: "center",

		padding: 15,
		marginTop: 50,
	},

	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "700",
	},
});
