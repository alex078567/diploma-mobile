import axios from 'axios';
import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';
const API_URL =
	Platform.OS === 'web'
		? process.env.EXPO_PUBLIC_API_LOCALHOST_WEB
		: process.env.EXPO_PUBLIC_API_LOCALHOST_MOBILE;

export const notesClient = axios.create({
	baseURL: API_URL,
	timeout: 5000,
});

notesClient.interceptors.request.use(
	async (config) => {
		const value = await SecureStore.getItemAsync('refreshToken');
		const keys = JSON.parse(value);
		config.headers.Authorization = `Bearer ${keys.access_token}`;
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);
