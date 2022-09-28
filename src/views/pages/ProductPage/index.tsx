import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Linking,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Iconsbar from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/Ionicons';

import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {baseFontSize} from 'native-base/lib/typescript/theme/tools';
import {VStack} from 'native-base';
import {useNavigation, NavigationContainer} from '@react-navigation/native';

import {InAppBrowser} from 'react-native-inappbrowser-reborn';

const ProductPage = () => {
  const swiperRef = useRef(null);
  const navigation = useNavigation();
  const product = {
    name: 'Designer women clothes',
    subtitle: 'Summer Dress',
    price: '$1200',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#000', '#ccc', '#f65'],
  };
  const BrowserButton = () => {
    const url = 'https://github.com/proyecto26';
    // if (await InAppBrowser.isAvailable()) {
    const result = InAppBrowser.open(url, {
      // iOS Properties
      dismissButtonStyle: 'cancel',
      preferredBarTintColor: '#453AA4',
      preferredControlTintColor: 'white',
      readerMode: false,
      animated: true,
      modalPresentationStyle: 'fullScreen',
      modalTransitionStyle: 'coverVertical',
      modalEnabled: true,
      enableBarCollapsing: false,
      // Android Properties
      showTitle: true,
      toolbarColor: '#6200EE',
      secondaryToolbarColor: 'black',
      navigationBarColor: 'black',
      navigationBarDividerColor: 'white',
      enableUrlBarHiding: true,
      enableDefaultShare: true,
      forceCloseOnRedirection: false,
      // Specify full animation resource identifier(package:anim/name)
      // or only resource name(in case of animation bundled with app).
      animations: {
        startEnter: 'slide_in_right',
        startExit: 'slide_out_left',
        endEnter: 'slide_in_left',
        endExit: 'slide_out_right',
      },
      headers: {
        'my-custom-header': 'my custom header value',
      },
    });
  };
  //     await this.sleep(800);
  //     Alert.alert(JSON.stringify(result))
  //   }
  //   else Linking.openURL(url)
  // } catch (error) {
  //   Alert.alert(error.message)
  // };

  const [list, setList] = useState([
    {
      imageUrl:
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
  ]);

  return (
    <View>
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
          <TouchableOpacity onPress={() => navigation.navigate('MyTreasury')}>
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
          <TouchableOpacity>
            <Iconsbar name="share-alternative" size={25} color="#484848" />
          </TouchableOpacity>
        </View> */}

      <ScrollView>
        <View>
          <SwiperFlatList
            // index={0}
            ref={swiperRef}
            showPagination
            data={list}
            renderItem={({item}) => (
              <Image
                source={{uri: item.imageUrl}}
                style={{
                  height: height / 2,
                  width: width,
                }}
              />
            )}
            paginationStyleItem={{
              marginTop: 45,
              width: 7,
              height: 7,
              marginLeft: 0,
            }}
            paginationActiveColor={'black'}
          />
        </View>

        {/* <View
          style={{
            flex: 0.5,
            justifiyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Image
            style={{resizeMode: 'stretch'}}
            source={require('../../../assets/images/trending-offer.png')}></Image>
        </View> */}
        <View style={{marginTop: 30, padding: 12}}>
          <Text
            style={{
              alignSelf: 'flex-end',
              fontFamily: 'Poppins',
              color: '#6A6A6A',
              fontSize: 15,
            }}>
            Treasured by 76 others
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontFamily: 'Poppins',
              color: '#333333',
              fontSize: 22,
              fontWeight: '600',
            }}>
            {product.name}
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: 'Poppins',
                color: '#6A6A6A',
                fontSize: 19,
                marginTop: 5,
              }}>
              {product.subtitle}
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Poppins',
              color: '#333333',
              fontSize: 22,
              fontWeight: '600',
              marginTop: 13,
            }}>
            {product.price}
          </Text>
          <View>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <VStack>
                <Text
                  style={{
                    fontFamily: 'Poppins',
                    color: '#6A6A6A',
                    fontSize: 17,
                    marginTop: 9,
                  }}>
                  Available Size:
                </Text>

                <TouchableOpacity>
                  <Text style={styles.TextView}>
                    {product.sizes.join(', ')}
                  </Text>
                </TouchableOpacity>
              </VStack>

              <VStack>
                <Text
                  style={{
                    fontFamily: 'Poppins',
                    color: '#6A6A6A',
                    fontSize: 17,
                    marginTop: 9,
                    marginRight: 79,
                  }}>
                  Color
                </Text>
                <View style={{flexDirection: 'row', marginRight: 40}}>
                  {product.colors.map(c => (
                    <TouchableOpacity>
                      <View
                        style={[styles.TextView1, {backgroundColor: c}]}></View>
                    </TouchableOpacity>
                  ))}
                </View>
              </VStack>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{paddingRight: 12, paddingLeft: 12, height: '40%'}}>
        <TouchableOpacity style={styles.button} onPress={BrowserButton}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: 'white',
            }}>
            Buy Now
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'Poppins',
            color: 'black',
            fontSize: 17,
            fontWeight: '300',
            alignSelf: 'center',
          }}>
          At VestiaireCollective.com
        </Text>
      </View>
    </View>
  );
};
export default ProductPage;
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  // container: {flex: 1, backgroundColor: 'pink'},
  child: {width, justifyContent: 'center'},
  text: {fontSize: width * 0.5, textAlign: 'center'},
  button: {
    alignItems: 'center',
    backgroundColor: '#333333',
    height: 53,
    justifyContent: 'center',
    // marginTop: 25,
    marginBottom: 10,
    borderRadius: 7,
    borderWidth: 1,
  },
  TextView: {
    fontFamily: 'Poppins',
    color: '#6A6A6A',
    fontSize: 18,
    // marginTop: 9,
    marginRight: 4,
  },
  TextView1: {
    fontFamily: 'Poppins',
    color: '#6A6A6A',

    // marginTop: 9,
    marginRight: 4,
    borderWidth: 1,
    width: 25,
    height: 25,
    borderRadius: 12,
  },
});
