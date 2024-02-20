import axios from 'axios';
import { notesClient } from '~/app/api/axios-setup';
//import { notesClient } from '~/app/api/axios-setup';
//import { errorHandler } from './errorHandler';
//import { RegisterI, loginI } from './types';
// const API_URL = `${import.meta.env.VITE_SERVER_URL}/users`;
const loginMobile = async (email, password) => {
	try {
		const response = await notesClient.post(`users/login-mobile`, {
			email,
			password,
		});

		return response.data;
	} catch (e) {
		//errorHandler(e);
	}
};

const AuthService = {
	loginMobile,
};

export default AuthService;
