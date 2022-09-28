import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  StatusBar,
  useColorScheme,
} from 'react-native';
import React, {useState, FC, ReactElement, useMemo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBar from 'react-native-dynamic-search-bar';
import Icons from 'react-native-vector-icons/FontAwesome';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MasonryList from 'reanimated-masonry-list';

const Hunt = () => {
  const [search, setSearch] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          paddingRight: 5,
          paddingLeft: 5,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HuntSearch')}
            style={[
              styles.input,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}>
            <TextInput
              // style={styles.input}
              onChangeText={setSearch}
              value={search}
              placeholder="Cherie Bach"
              placeholderTextColor={'#656565'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              borderWidth: 1,
              height: 55,
              marginTop: 12,
              width: '12%',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: 'black',
            }}>
            <Icons name="exchange" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <Text style={{margin: 4}}>245 results</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              backgroundColor: 'white',

              height: '100%',
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
              ]}
              // horizontal
              // inverted
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <View
                  style={{
                    backgroundColor: 'white',
                    width: width * 0.47,
                    height: height * 0.22,
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ProductPage')}>
                    <ImageBackground
                      style={{
                        height: 137,
                        width: '100%',
                        alignItems: 'flex-end',
                        //  backgroundColor: 'red',
                        alignSelf: 'center',
                      }}
                      source={{uri: item.imageUrl}}>
                      <TouchableOpacity>
                        <Image
                          style={{
                            height: 45,
                            width: 45,
                            resizeMode: 'stretch',
                            marginTop: 3,
                          }}
                          source={require('../../../assets/images/tLogo.png')}></Image>
                      </TouchableOpacity>
                    </ImageBackground>
                  </TouchableOpacity>
                  <View style={{marginStart: 5, marginTop: 5}}>
                    <Text
                      style={{
                        alignSelf: 'flex-start',
                        textAlign: 'center',
                        fontSize: 12,
                      }}>
                      @call Fays
                    </Text>
                    <Text
                      style={{
                        alignSelf: 'flex-start',
                        textAlign: 'center',
                        fontSize: 10,
                      }}>
                      carter
                    </Text>
                    <Text
                      style={{
                        alignSelf: 'flex-start',
                        textAlign: 'center',
                        fontSize: 8,
                      }}>
                      $120
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
          {/* gcghg */}
          <View style={{paddingRight: 12, paddingLeft: 12}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: 'white',
                  // width: '45%',
                  height: '100%',
                  justifyContent: 'center',
                  // marginTop: 60,
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
                  ]}
                  // horizontal
                  // inverted
                  showsHorizontalScrollIndicator={false}
                  // style={{marginHorizontal: 5}}
                  renderItem={({item, index}) => (
                    <View
                      style={{
                        // marginLeft: 2,
                        // marginRight: 2,
                        // marginBottom: 2,
                        backgroundColor: 'white',
                        width: width * 0.47,
                        height: height * 0.3,
                      }}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('ProductPage')}>
                        <ImageBackground
                          style={{
                            height: 197,
                            width: '100%',
                            alignItems: 'flex-end',
                            //  backgroundColor: 'red',
                            alignSelf: 'center',
                          }}
                          source={{uri: item.imageUrl}}>
                          <TouchableOpacity>
                            <Image
                              style={{
                                height: 45,
                                width: 45,
                                resizeMode: 'stretch',
                                marginTop: 3,
                              }}
                              source={require('../../../assets/images/tLogo.png')}></Image>
                          </TouchableOpacity>
                        </ImageBackground>
                      </TouchableOpacity>
                      <View style={{marginStart: 5, marginTop: 5}}>
                        <Text
                          style={{
                            alignSelf: 'flex-start',
                            textAlign: 'center',
                            fontSize: 12,
                          }}>
                          @call Fays
                        </Text>
                        <Text
                          style={{
                            alignSelf: 'flex-start',
                            textAlign: 'center',
                            fontSize: 10,
                          }}>
                          carter
                        </Text>
                        <Text
                          style={{
                            alignSelf: 'flex-start',
                            textAlign: 'center',
                            fontSize: 8,
                          }}>
                          $120
                        </Text>
                      </View>
                    </View>
                  )}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Hunt;

const styles = StyleSheet.create({
  input: {
    height: 55,
    marginTop: 12,
    // borderWidth: 1,
    padding: 10,
    fontSize: 17,
    color: 'black',
    borderRadius: 10,
    backgroundColor: '#e1e1e1',
    width: '87%',
    marginRight: 4,
  },
  TextView: {
    color: '#9d9d9d',
    marginTop: 22,
    fontSize: 22,
  },
  TextView1: {
    color: '#9d9d9d',
    marginTop: 28,
    fontSize: 15,
  },
});
