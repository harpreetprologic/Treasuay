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
import React, {useEffect} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {View} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {dummyProducts} from '../../../constants/dummy';
const {width, height} = Dimensions.get('window');
type Props = {
  type?: number;
  headerText: string;
  data: any[];
};

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
          contentContainerStyle={{paddingBottom: 130}}
          data={dummyProducts}
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

const CollectionTab = () => {
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
    <View style={{height: '80%'}}>
      <TabView
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
      />
    </View>
  );
};
export default CollectionTab;
const styles = StyleSheet.create({});
