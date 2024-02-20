import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles } from './styles';
const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.headerOnPage}>Заметки</Text>
				<Text style={styles.headerDescription}>
					Простая система для ведения дел
				</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<Pressable
					style={styles.button}
					onPress={() => {
						navigation.navigate('Login');
					}}
				>
					<Text style={styles.textInButton}>Вход</Text>
				</Pressable>
				<Pressable
					style={styles.button}
					onPress={() => {
						navigation.navigate('Register');
					}}
				>
					<Text style={styles.textInButton}>Регистрация</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default HomeScreen;
