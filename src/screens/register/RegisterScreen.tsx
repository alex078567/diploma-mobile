import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
const RegisterScreen = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		password_confirm: '',
		name: '',
		surname: '',
	});

	const handleChange = (event: { name: string; value: string }) => {
		event;
		const { name, value } = event;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const apiRequest = async () => {};

	return (
		<View style={styles.container}>
			<Text style={styles.headerOnPage}>Регистрация</Text>
			<View style={styles.formContainer}>
				<View style={styles.inputContainer}>
					<View>
						<Text style={styles.label}>Логин</Text>
						<TextInput
							style={styles.input}
							defaultValue={formData.email}
							onChangeText={(value) => {
								handleChange({ name: 'email', value });
							}}
							inputMode="email"
							keyboardType="email-address"
							placeholder="Введите логин"
						/>
					</View>
					<View>
						<Text style={styles.label}>Пароль</Text>
						<TextInput
							style={styles.input}
							defaultValue={formData.password}
							onChangeText={(value) => {
								handleChange({ name: 'password', value });
							}}
							inputMode="text"
							secureTextEntry={true}
							keyboardType="email-address"
							placeholder="Введите пароль"
						/>
					</View>
				</View>
				<Pressable
					style={styles.button}
					onPress={() => {
						apiRequest();
					}}
				>
					<Text style={styles.textInButton}>Вход</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default RegisterScreen;
