import { Pressable, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useAppDispatch } from '~/shared/hooks/reduxToolkitHooks';
import { loginMobile } from '~/shared/reduxSlices/authSlice';
import { styles } from './styles';

const LoginScreen = () => {
	const dispatch = useAppDispatch();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const handleChange = (event: { name: string; value: string }) => {
		console.log(event);
		event;
		const { name, value } = event;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const apiRequest = async () => {
		dispatch(
			loginMobile({ email: formData.email, password: formData.password })
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.headerOnPage}>Вход</Text>
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

export default LoginScreen;
