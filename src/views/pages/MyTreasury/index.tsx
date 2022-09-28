import {
  StyleSheet,
  Text,
  // View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
// import Icons from 'react-native-vector-icons/Entypo';
import TwiterIcons from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import NoteIcons from 'react-native-vector-icons/SimpleLineIcons';
import {HStack, VStack} from 'native-base';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {View, useWindowDimensions} from 'react-native';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Iconsbar from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/Entypo';

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const FirstRoute = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          width: '100%',
          height: '100%',
          // marginTop: 2,
        }}>
        <FlatList
          data={[
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
            },

            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
            },

            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
            },
          ]}
          // inverted
          showsHorizontalScrollIndicator={false}
          style={{marginVertical: 4}}
          numColumns={3}
          renderItem={({item, index}) => (
            <View style={{flex: 1, padding: 1, width: width * 0.28}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductPage')}>
                <Image
                  style={{
                    height: 150,
                    width: 128,

                    resizeMode: 'cover',
                    // backgroundColor: 'red',
                  }}
                  source={{uri: item.imageUrl}}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

//////////////////////hgvhjbbj
const SecondRoute = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          width: '100%',
          height: '100%',
          marginTop: 2,
        }}>
        <FlatList
          data={[
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
            },

            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg',
            },
            {
              imageUrl:
                'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
            },
          ]}
          // inverted
          showsHorizontalScrollIndicator={false}
          style={{marginVertical: 3}}
          numColumns={3}
          renderItem={({item, index}) => (
            <View style={{flex: 1, padding: 1, width: width * 0.28}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductPage')}>
                <Image
                  style={{
                    height: 150,
                    width: 128,

                    resizeMode: 'cover',
                    // backgroundColor: 'red',
                  }}
                  source={{uri: item.imageUrl}}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const MyTreasury = () => {
  const layout = useWindowDimensions();
  const navigation = useNavigation();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Treasures'},
    {key: 'second', title: 'Collection'},
  ]);
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      style={{backgroundColor: '#c4c4c4'}}
      activeColor={'white'}
      inactiveColor={'white'}
      indicatorStyle={{
        backgroundColor: 'red',
        borderColor: '#484848',
        borderWidth: 30,
      }}
      labelStyle={{
        fontSize: 19,
        fontFamily: 'PlayfairDisplay-SemiBold',
        textTransform: 'capitalize',
      }}
    />
  );
  return (
    <View style={{flex: 1}}>
      {/* <SafeAreaView style={styles.container}> */}
      {/* <View
          style={{
            borderBottomWidth: 1,
            borderTopWidth: 1,
            height: 45,
            justifyContent: 'space-between',
            borderColor: '#C4C4C4',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}>
          <TouchableOpacity>
            <Icons name="chevron-back" size={25} color="#484848" />
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 22,
              //   fontWeight: '600',
              fontStyle: 'normal',
              fontFamily: 'Playfair Display',
              color: '#484848',
            }}>
            TREASURY COLLECTIVE
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('MyTreasury')}>
            <Iconsbar name="share-alternative" size={25} color="#484848" />
          </TouchableOpacity>
        </View> */}
      <LinearGradient
        colors={['#1770f6', '#3a629f', '#3a629f']}
        style={styles.linearGradient}>
        {/* <View style={{flex: 0.4, backgroundColor: 'red'}}> */}
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
            source={require('../../../assets/images/profile.png')}></Image>
          <Text
            style={{
              color: 'white',
              marginStart: 10,
              marginEnd: 10,
              fontSize: 20,
            }}>
            Adam
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileScreen')}>
            <NoteIcons name="note" size={18} color="white" />
          </TouchableOpacity>
        </View>
        <HStack
          style={{
            justifyContent: 'space-between',
            marginTop: 12,
            alignItems: 'center',
          }}>
          <VStack alignItems="center">
            <Text style={{color: 'white', fontWeight: 'bold'}}>292</Text>
            <Text
              style={{
                color: 'white',
                fontWeight: '600',
              }}>
              Treasures
            </Text>
          </VStack>
          <VStack alignItems="center">
            <Text style={{color: 'white', fontWeight: 'bold'}}>10.4k</Text>
            <Text style={{color: 'white', fontWeight: '600'}}>Followers</Text>
          </VStack>
          <VStack alignItems="center">
            <Text style={{color: 'white', fontWeight: 'bold'}}>1.2k</Text>
            <Text style={{color: 'white', fontWeight: '600'}}>Following</Text>
          </VStack>
        </HStack>
        <View style={{marginStart: 5, marginTop: 15}}>
          <Text style={{color: '#cdd8e7', fontSize: 13}}>
            Hi! Welcome to my Treasury. I'm a singer-songwiter
          </Text>
          <Text style={{color: '#cdd8e7', fontSize: 13, paddingTop: 5}}>
            based in Los Angeles carving space in the industry.
          </Text>
          <Text style={{color: '#cdd8e7', fontSize: 12, paddingTop: 5}}>
            My style is born from vintage wintage shops from around the
          </Text>
          <Text style={{color: '#cdd8e7', fontSize: 13, paddingTop: 5}}>
            world.
          </Text>
        </View>
      </LinearGradient>

      <TabView
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
      />
      {/* </SafeAreaView> */}
    </View>
  );
};

export default MyTreasury;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 0.7,
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
