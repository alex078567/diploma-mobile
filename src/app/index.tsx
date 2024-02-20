import { View, Text } from 'react-native';
import React from 'react';
import Wrappers from './wrappers';
import StackNavigator from '~/screens';

const App = () => {
	return (
		<Wrappers>
			<StackNavigator />
		</Wrappers>
	);
};

export default App;
