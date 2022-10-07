import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import TwiterIcons from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import NoteIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Box, Center, HStack, VStack} from 'native-base';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {View, useWindowDimensions} from 'react-native';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getProfile} from '../../../store/actions/authActions';
import {useSelector, useDispatch} from 'react-redux';

import Iconsbar from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/Entypo';
import CollectionTab from './CollectionTab';
import {BASE_URL} from '../../../../src/constants/keys';

const {width, height} = Dimensions.get('window');

const MyTreasury = () => {
  const dispatch = useDispatch();
  const authReducer = useSelector((state: any) => state?.authReducer);
  const {isLoading, userDetails, treasures, followers, following} = authReducer;

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const navigation = useNavigation();

  const renderProfile = useCallback(
    () => (
      <Box>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            paddingTop: 11,
            // paddingEnd: 11,
          }}>
          <TouchableOpacity style={{marginRight: 13}}>
            <TwiterIcons name="twitter" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icons name="instagram" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '28%',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{
              height: 80,
              width: 80,
              resizeMode: 'stretch',
              borderRadius: 500,
              borderColor: 'black',
              alignSelf: 'flex-start',

              // borderWidth: 1,
            }}
            source={{uri: `${BASE_URL}/${userDetails.profilePic}`}}></Image>
          <Text
            style={{
              color: 'white',
              marginStart: 10,
              marginEnd: 10,
              fontSize: 20,
              width: '100%',
            }}>
            {userDetails?.name}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileScreen')}>
            <NoteIcons name="note" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </Box>
    ),
    [userDetails],
  );

  const renderFollowers = useCallback(
    () => (
      <HStack
        style={{
          justifyContent: 'space-between',
          marginTop: 12,
          alignItems: 'center',
        }}>
        <Center>
          <Text style={{color: 'white', fontWeight: 'bold'}}>{treasures}</Text>
          <Text
            style={{
              color: 'white',
              fontWeight: '600',
            }}>
            Treasures
          </Text>
        </Center>
        <Center>
          <Text style={{color: 'white', fontWeight: 'bold'}}>{followers}</Text>
          <Text style={{color: 'white', fontWeight: '600'}}>Followers</Text>
        </Center>
        <Center>
          <Text style={{color: 'white', fontWeight: 'bold'}}>{following}</Text>
          <Text style={{color: 'white', fontWeight: '600'}}>Following</Text>
        </Center>
      </HStack>
    ),
    [userDetails],
  );

  const renderBio = useCallback(
    () => (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginStart: 5, marginTop: 15}}>
        <Text style={{color: '#cdd8e7', fontSize: 13, lineHeight: 20}}>
          Hi! Welcome to my Treasury. I'm a singer-songwiter{'\n'}
          based in Los Angeles carving space in the industry.{'\n'}
          My style is born from vintage wintage shops from around the world. My
          style is born from vintage wintage shops from around the world. My
          style is born from vintage wintage shops from around the world. My
          style is born from vintage wintage shops from around the world. My
          style is born from vintage wintage shops from around the world. My
          style is born from vintage wintage shops from around the world.
        </Text>
      </ScrollView>
    ),
    [userDetails],
  );

  return (
    <View style={{flex: 1, height: '100%'}}>
      <LinearGradient
        colors={['#1770f6', '#3a629f', '#3a629f']}
        style={styles.linearGradient}>
        {renderProfile()}
        {renderFollowers()}
        {renderBio()}
      </LinearGradient>

      <CollectionTab />
    </View>
  );
};

export default MyTreasury;

const styles = StyleSheet.create({
  linearGradient: {
    height: height * 0.31,
    paddingLeft: 15,
    paddingRight: 15,
  },
  View$: {
    alignSelf: 'flex-start',
    textAlign: 'center',
    fontSize: 8,
  },
  HeaderView: {
    marginTop: 15,
    marginHorizontal: 5,
    marginVertical: 5,
    fontSize: 18,
    fontWeight: '200',
    fontFamily: 'Playfair Display',
  },
  container: {flex: 1, backgroundColor: 'white'},
});
