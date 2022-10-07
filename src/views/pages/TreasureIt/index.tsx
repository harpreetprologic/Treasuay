import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import React, {useState, useEffect, useCallback} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import {color} from 'react-native-reanimated';
import {useClipboard} from '@react-native-clipboard/clipboard';
import {scale, verticalScale} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');

const TreasureIt = () => {
  const navigation = useNavigation();
  const [copiedText, setCopiedText] = useState('');
  const [data, setString] = useClipboard();

  useEffect(() => {
    setString('hello world');
  }, []);

  const copyToClipboard = () => {
    Clipboard.setString('hello world');
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };
  const header = useCallback(
    () => (
      <Text
        style={{
          color: 'white',
          fontSize: scale(26),
          fontFamily: 'Playfair Display',
          fontStyle: 'italic',
          alignSelf: 'center',
          marginTop: 40,
        }}>
        Treasure It!
      </Text>
    ),
    [],
  );
  const box = useCallback(
    () => (
      <View
        style={{
          flex: 0.8,

          width: '65%',
          alignSelf: 'center',
          borderColor: 'white',
          borderWidth: 2,
          backgroundColor: '#1c1c1c',
          marginTop: verticalScale(38),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            borderColor: 'white',
            borderRadius: 7,
            width: '92%',
            flex: 0.9,
            backgroundColor: '#1c1c1c',
            borderWidth: 1,
            alignSelf: 'center',
            borderStyle: 'dashed',
            alignItems: 'center',
          }}
          onPress={fetchCopiedText}>
          <View style={{marginTop: 22}}>
            <TouchableOpacity onPress={copyToClipboard}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',

                  fontSize: scale(17),
                }}>
                Copy a link
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={fetchCopiedText}>
              <Image
                style={{
                  height: 50,
                  width: 50,
                  resizeMode: 'stretch',
                  marginTop: verticalScale(12),
                  alignSelf: 'center',
                }}
                source={require('../../../assets/icons/hand-pointer.png')}></Image>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              marginTop: 12,
              alignSelf: 'center',
              fontSize: 19,
            }}>
            Tap to paste
          </Text>
          {/* </View> */}
        </TouchableOpacity>
      </View>
    ),
    [],
  );
  const text = useCallback(
    () => (
      <View>
        <Text
          style={{
            color: 'white',
            marginTop: 44,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: '700',
          }}>
          Not Sure What To Treasure?
        </Text>
        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            paddingTop: 11,
            fontSize: 19,
          }}>
          Try one of these :{copiedText}
        </Text>
      </View>
    ),
    [],
  );
  const flatList = useCallback(
    () => (
      <View
        style={{
          backgroundColor: 'black',
          width: '100%',
          height: '20%',
          justifyContent: 'center',
          marginTop: 60,
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
          horizontal
          // inverted
          showsHorizontalScrollIndicator={false}
          // style={{marginHorizontal: 5}}
          renderItem={({item, index}) => (
            <View
              style={{
                // marginLeft: 2,
                marginRight: 2,
                // marginBottom: 2,
                backgroundColor: 'black',
                width: width * 0.37,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductPage')}>
                <ImageBackground
                  style={{
                    height: 137,
                    width: '100%',
                    alignItems: 'flex-end',
                    //  backgroundColor: 'red',
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
            </View>
          )}
        />
      </View>
    ),
    [],
  );

  return (
    <LinearGradient
      colors={['#000000', '#5a5a5a', '#000000']}
      style={styles.linearGradient}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}>
      {header()}
      {box()}
      {text()}
      {flatList()}
    </LinearGradient>
  );
};

export default TreasureIt;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copiedText: {
    marginTop: 10,
    color: 'white',
  },
});
