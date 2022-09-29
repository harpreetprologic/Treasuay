import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import {useSelector} from 'react-redux';

import Iconsbar from 'react-native-vector-icons/Octicons';
import Icons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import {api} from '../../../util';
import ProductList from '../../components/ProductList';

const {width, height} = Dimensions.get('window');
let mostTreasure = [
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
];

const TreasuryCollection = () => {
  const navigation = useNavigation();

  const authReducer = useSelector((state: any) => state?.authReducer);
  const {isLoading, userDetails} = authReducer;

  const getProducts = async () => {
    try {
      const {data} = await api.get('products/');

      console.log('..products', data);
    } catch (error) {
      console.log('...Error in getProducts', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View>
      <View style={{paddingVertical: 8, backgroundColor: '#FFFFFF'}}>
        <View
          style={{
            flexDirection: 'row',

            backgroundColor: 'white',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'white',
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{alignItems: 'center'}}
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
                    'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
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
                    'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
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
                    'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
                },
              ]}
              horizontal
              inverted
              ListHeaderComponent={
                <View
                  style={{
                    width: '90%',
                    // backgroundColor: 'red',
                    marginLeft: 5,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ProductPage')}>
                    <Image
                      style={{
                        height: 80,
                        width: 80,
                        resizeMode: 'stretch',
                        borderRadius: 500,
                        borderColor: 'black',
                        borderWidth: 4,
                      }}
                      source={require('../../../assets/images/Photo1.jpeg')}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      alignSelf: 'center',
                      textAlign: 'center',
                      fontSize: 14,
                      width: '80%',
                    }}>
                    Find/add friends
                  </Text>
                </View>
              }
              renderItem={({item, index}) => (
                <View
                  style={{
                    // width: '90%',
                    marginLeft: 10,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ProductPage')}>
                    <Image
                      style={{
                        height: 80,
                        width: 80,
                        resizeMode: 'stretch',
                        borderRadius: 90,
                        borderColor: 'black',
                        borderWidth: 1,
                      }}
                      source={{uri: item.imageUrl}}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      alignSelf: 'center',
                      textAlign: 'center',
                      fontSize: 14,
                      width: '80%',
                    }}>
                    Name of Id
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
      <ScrollView style={{marginHorizontal: 6}}>
        <View style={{marginBottom: '50%'}}>
          <ProductList
            type={0}
            headerText={'Most Treasured'}
            data={mostTreasure}
          />
          <ProductList headerText={'Recently Treasured'} data={mostTreasure} />
          <ProductList
            type={0}
            headerText={'Most Treasured'}
            data={mostTreasure}
          />
          <ProductList headerText={'Recently Treasured'} data={mostTreasure} />
          <ProductList
            type={0}
            headerText={'Most Treasured'}
            data={mostTreasure}
          />
          <ProductList headerText={'Recently Treasured'} data={mostTreasure} />
          <ProductList
            type={0}
            headerText={'Most Treasured'}
            data={mostTreasure}
          />
          <ProductList headerText={'Recently Treasured'} data={mostTreasure} />
        </View>
      </ScrollView>
    </View>
  );
};
export default TreasuryCollection;
const styles = StyleSheet.create({
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
});
