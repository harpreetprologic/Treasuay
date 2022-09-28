import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Introduction from '../views/pages/Introduction';
import Login from '../views/pages/Login';
import Signup from '../views/pages/Signup';
import Onboarding from '../views/pages/Onboarding';
import TreasuryCollection from '../views/pages/TreasuryCollection';
import Tabs from '../views/pages/Tabs';
import {useSelector} from 'react-redux';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyDrawer from './Drawer';
import BottomTab from './TabScreen';
import ProductPage from '../views/pages/ProductPage';
import MyTreasury from '../views/pages/MyTreasury';
import Header from './Header';
import ProfileScreen from '../views/pages/ProfileScreen';
import HuntSearch from '../views/pages/HuntSearch';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const authReducer = useSelector((state: any) => state?.authReducer);
  const {userDetails} = authReducer;

  return (
    // <Stack.Navigator initialRouteName="MainDrawer">
    <Stack.Navigator initialRouteName="Login">
      {!userDetails ? (
        <>
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
        </>
      ) : (
        <>
          {/* <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{headerShown: false}}
          /> */}

          <Stack.Screen
            name="MainDrawer"
            component={MyDrawer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProductPage"
            component={ProductPage}
            options={({navigation, route}) => ({
              title: 'Treasury',
              header: () => (
                <Header
                  navigation={navigation}
                  route={route}
                  title="Product"
                  isDrawer={false}
                  isShareButtonVisible={true}
                />
              ),
            })}
          />

          <Stack.Screen
            name="MyTreasury"
            component={MyTreasury}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={({navigation, route}) => ({
              // title: 'Treasury',
              header: () => (
                <Header
                  navigation={navigation}
                  route={route}
                  title="Profile"
                  // isDrawer={false}
                  isShareButtonVisible={true}
                />
              ),
            })}
          />
          <Stack.Screen
            name="HuntSearch"
            component={HuntSearch}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;
