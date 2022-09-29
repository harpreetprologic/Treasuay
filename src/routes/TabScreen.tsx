import React from 'react';
import {ImageSourcePropType, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'native-base';

import treasuryIcon from '../assets/icons/treasury.png';
import addIcon from '../assets/icons/add.png';
import huntIcon from '../assets/icons/hunt.png';
import collectiveIcon from '../assets/icons/collective.png';
import Header from './Header';
//import TreasuryCollection from 'views/pages/TreasuryCollection';
import Hunt from '../../src/views/pages/Hunt';
import TreasureIt from '../../src/views/pages/TreasureIt';
import MyTreasury from '../../src/views/pages/MyTreasury';
import ProductPage from '../../src/views/pages/ProductPage';
import TreasuryCollection from '../../src/views/pages/TreasuryCollection';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      // initialRouteName="TreasureIt"

      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: ImageSourcePropType;

          switch (route.name) {
            case 'Collective':
              iconName = collectiveIcon;
              break;
            case 'Hunt':
              iconName = huntIcon;
              break;
            case 'TreasureIt':
              iconName = addIcon;
              break;
            case 'My Treasury':
              iconName = treasuryIcon;
              break;
            default:
              iconName = collectiveIcon;
          }

          return (
            <Image
              source={iconName}
              style={{tintColor: focused ? '#000' : '#696969'}}
              alt="icon"
            />
          );
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#696969',
        tabBarHideOnKeyboard: true,
        unmountOnBlur: true,
        tabBarStyle: {
          height: 80,
          paddingTop: 1,
        },
        tabBarLabelStyle: {fontSize: 12},
      })}>
      <Tab.Screen
        name="Collective"
        component={TreasuryCollection}
        options={({navigation, route}) => ({
          header: () => (
            <Header
              navigation={navigation}
              route={route}
              title={'TREASURY COLLECTIVE'}
              isDrawer={true}
              isShareButtonVisible={false}
            />
          ),
        })}
      />
      <Tab.Screen name="Hunt" component={Hunt} options={{headerShown: false}} />

      <Tab.Screen
        name="TreasureIt"
        component={TreasureIt}
        options={({navigation, route}) => ({
          title: 'Add',
          header: () => (
            <Header
              navigation={navigation}
              route={route}
              title={'TREASURY COLLECTIVE'}
              isDrawer={true}
              isShareButtonVisible={false}
            />
          ),
        })}
      />
      <Tab.Screen
        name="My Treasury"
        component={MyTreasury}
        options={({navigation, route}) => ({
          title: 'Treasury',
          header: () => (
            <Header
              navigation={navigation}
              route={route}
              title="My Treasury"
              isDrawer={true}
              isShareButtonVisible={true}
            />
          ),
        })}
      />

      {/* <Tab.Screen
        name="ProductPage"
        component={ProductPage}
        options={({navigation, route}) => ({
          title: 'Product Page',
          header: () => (
            <Header
              navigation={navigation}
              route={route}
              title={'TREASURY COLLECTIVE'}
              isDrawer={true}
              isShareButtonVisible={true}
            />
          ),
        })}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontFamily: 'PlayfairDisplay-Bold',
  },
  header: {
    borderWidth: 1,
  },
});
