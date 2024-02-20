import { View, Text } from 'react-native';
import React from 'react';
import StoreWrapper from './StoreWrapper';
import NavigationContainerWrapper from './ReactNavigationWrapper';

const Wrappers = ({ children }) => {
	return (
		<StoreWrapper>
			<NavigationContainerWrapper>{children}</NavigationContainerWrapper>
		</StoreWrapper>
	);
};

export default Wrappers;
