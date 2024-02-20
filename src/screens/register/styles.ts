import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		padding: 47,
	},
	headerOnPage: {
		fontSize: 38,
		fontWeight: 'bold',
		marginBottom: 32,
	},
	formContainer: {},

	inputContainer: {
		display: 'flex',
		gap: 16,
		marginBottom: 40,
	},
	inputAndLabel: {},
	label: {
		fontSize: 24,
		marginBottom: 10,
	},
	input: {
		fontSize: 16,
		paddingLeft: 8,
		paddingTop: 8,
		paddingBottom: 8,
		paddingRight: 8,
		backgroundColor: '#fff',
		borderColor: '#767676',
		borderWidth: 1,
		borderRadius: 5,
	},
	button: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFBD03',
		borderRadius: 18,
		alignSelf: 'stretch',
		height: 58,
		color: '#000',
		fontSize: 16,
	},

	textInButton: {
		fontSize: 24,
	},
});
