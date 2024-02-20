import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		padding: 47,
		flex: 1,
		//justifyContent: 'center',
		backgroundColor: '#f0eeee',
	},
	textContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 20,
		marginBottom: 120,
	},
	headerOnPage: {
		fontSize: 38,
		fontWeight: 'bold',
	},
	headerDescription: {
		fontSize: 22,
		textAlign: 'center',
	},

	buttonsContainer: {
		alignItems: 'center',
		gap: 10,
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
