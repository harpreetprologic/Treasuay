import {
  Image,
  View,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {HStack, Text, Box} from 'native-base';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from './Header';
import BottomTab from './TabScreen';
import {logout} from '../store/actions/authActions';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  function CustomDrawerContent(props: any) {
    const dispatch = useDispatch();
    const [isImageLoading, setImageLoading] = useState(false);

    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="Logout"
          icon={() => <Icon style={{fontSize: 24}} name="ios-power-sharp" />}
          onPress={() => dispatch(logout())}
        />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;

const styles = StyleSheet.create({
  dummyImageStyle: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginRight: 10,
  },
});
