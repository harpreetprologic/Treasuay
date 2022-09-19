import {View} from 'react-native';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import MainNavigator from './MainNavigator';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const Routes = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Routes;
