import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {Text} from 'native-base';

import Introduction from 'views/pages/Introduction';
import Login from 'views/pages/Login';
import Signup from 'views/pages/Signup';
import Onboarding from 'views/pages/Onboarding';
import TreasuryCollection from 'views/pages/TreasuryCollection';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// const MyTabs = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Dashboard" component={Dashboard} />
//     <Tab.Screen name="Profile" component={Profile} />
//     <Tab.Screen name="Settings" component={Settings} />
//   </Tab.Navigator>
// );

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let icon = require('../../../assets/images/Photo1.jpeg');
          switch (route.name) {
            case 'Home':
              icon = require('../../../assets/images/Photo1.jpeg');
              break;
            case 'Login':
              icon = require('../../../assets/images/Photo1.jpeg');
              break;
            case 'Product':
              icon = require('../../../assets/images/Photo1.jpeg');
              break;
            case 'Profile':
              icon = require('../../../assets/images/Photo1.jpeg');
              break;
          }

          return <Image source={icon} style={{width: 30, height: 30}}></Image>;
        },
      })}>
      <Tab.Screen name="Home" component={TreasuryCollection} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Product" component={Signup} />
      <Tab.Screen name="Profile" component={Login} />
    </Tab.Navigator>
  );
}

// export default function MainDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Dashboard" component={MyTabs} />
//     </Drawer.Navigator>
//   );
// }

const styles = StyleSheet.create({});
