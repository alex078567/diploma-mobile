import { View, Text } from 'react-native';
import HomeScreen from './home/HomeScreen';
import LoginScreen from './login/LoginScreen';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './register/RegisterScreen';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				options={{
					animationTypeForReplace: 'pop',
					animation: 'slide_from_left',
				}}
				name="Home"
				component={HomeScreen}
			/>
			<Stack.Screen
				options={{
					animationTypeForReplace: 'push',
					animation: 'slide_from_right',
				}}
				name="Login"
				component={LoginScreen}
			/>
			<Stack.Screen
				options={{
					animationTypeForReplace: 'push',
					animation: 'slide_from_right',
				}}
				name="Register"
				component={RegisterScreen}
			/>
		</Stack.Navigator>
	);
};

export default StackNavigator;
