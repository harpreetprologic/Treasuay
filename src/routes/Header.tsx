import {
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Share as RNShare,
  Alert,
} from 'react-native';
import {HStack, Text, Box, Image} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import shareIcon from '../assets/icons/share.png';

const hitSlop = {left: 5, right: 5, top: 5, botttom: 5};

type Props = {
  navigation: any;
  route: any;
  title: any;
  isDrawer?: boolean | null;
  isShareButtonVisible?: boolean | null;
};

const Header = ({
  navigation,
  route,
  title,
  isDrawer,
  isShareButtonVisible,
}: Props) => {
  return (
    <SafeAreaView>
      <HStack
        style={styles.header}
        justifyContent="space-between"
        alignItems="center">
        <TouchableOpacity
          onPress={() =>
            isDrawer ? navigation.toggleDrawer() : navigation.goBack()
          }
          style={{width: 45, alignItems: 'center'}}
          hitSlop={hitSlop}>
          {isDrawer ? (
            <MaterialCommunityIcons name="menu" size={35} color="#bbb" />
          ) : (
            <MaterialCommunityIcons
              name="chevron-left"
              size={48}
              color="#444"
            />
          )}
        </TouchableOpacity>

        <Text style={styles.title}>{title || route.name}</Text>

        <Box style={{width: 45, alignItems: 'center'}}>
          {isShareButtonVisible ? (
            <TouchableOpacity onPress={() => {}}>
              <Image
                source={shareIcon}
                resizeMode="contain"
                style={{width: 30, height: 30}}
                alt="Share"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('My Treasury', {
                  screen: 'BottomTab',
                })
              }>
              <MaterialCommunityIcons
                name="account-outline"
                size={35}
                color="#bbb"
              />
            </TouchableOpacity>
          )}
        </Box>
      </HStack>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#999',
    backgroundColor: '#fff',
    height: 38,
  },
  title: {
    fontSize: 21.5,
    lineHeight: 28,
    fontWeight: '500',
    fontFamily: 'PlayfairDisplay-Bold',
  },
});
