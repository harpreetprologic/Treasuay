import React, {useEffect, useState} from 'react';
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
import ProductList from 'src/views/components/inputs/ProductList';
import {Modal} from 'native-base';
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
  const [modalData, setModalData] = useState({isOpen: false, profile: ''});
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
      <View style={{paddingVertical: 8, backgroundColor: '#ffffff'}}>
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
                    style={{height: 80, width: 80}}
                    onPress={() => {
                      console.log('PRSSD');
                      setModalData({isOpen: true, profile: item.imageUrl});
                    }}>
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
        <ProductList headerText={'Recently Treasured'} data={mostTreasure} />
        <ProductList
          type={0}
          headerText={'Most Treasured'}
          data={mostTreasure}
        />
        <ProductList
          type={0}
          headerText={'Most Treasured'}
          data={mostTreasure}
        />
      </ScrollView>
      <Modal
        isOpen={modalData.isOpen}
        onClose={() => setModalData({isOpen: false, profile: ''})}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <Image
              source={{uri: modalData.profile}}
              style={{height: 400, width: '100%'}}
            />
          </Modal.Body>
        </Modal.Content>
      </Modal>
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

(35 kB)
https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg