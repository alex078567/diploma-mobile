import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from '../api/auth.service';
import * as SecureStore from 'expo-secure-store';

export const loginMobile = createAsyncThunk(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		const response = await AuthService.loginMobile(email, password);
		return response;
	}
);

const initialState = {
	isLoggedIn: false,
	userName: '',
	isLoading: false,
	message: '',
	id: '',
	showToast: false,
	toastMessage: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loginMobile.fulfilled, (state, action) => {
			console.log(action);
			const { payload } = action;
			SecureStore.setItemAsync('refreshToken', payload.refreshToken);
			state.isLoggedIn = true;
			state.userName = payload.name;
			state.id = payload.id;
			state.isLoading = false;
		});
	},
});

const { actions, reducer } = authSlice;

export default reducer;
