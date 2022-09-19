import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Introduction from 'views/pages/Introduction';
import Login from 'views/pages/Login';
import Signup from 'views/pages/Signup';
import Onboarding from 'views/pages/Onboarding';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
