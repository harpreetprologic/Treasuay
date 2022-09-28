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
interface Furniture {
  id: string;
  imgURL: string;
  text: string;
}
const data: Furniture[] = [
  {
    id: 'id123',
    imgURL:
      'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
    text: 'Pioneer LHS Chaise Lounger in Grey Colour',
  },
  {
    id: 'id124',
    imgURL:
      'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
    text: 'Precedant Furniture',
  },
  {
    id: 'id125',
    imgURL:
      'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
    text: 'Leverette Upholstered Platform Bed',
  },
  {
    id: 'id126',
    imgURL:
      'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
    text: 'Briget Accent Table',
  },
  {
    id: 'id127',
    imgURL:
      'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
    text: 'Rivet Emerly Media Console',
  },
  {
    id: 'id128',
    imgURL:
      'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
    text: 'Drew Barrymore Flower Home Accent Chair',
  },
  {
    id: 'id129',
    imgURL:
      'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
    text: 'Ecobirdy Charlie Chair',
  },
  {
    id: 'id130',
    imgURL:
      'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
    text: 'Hailey Sofa',
  },
  {
    id: 'id131',
    imgURL:
      'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
    text: 'Farmhouse Dining Table',
  },
  {
    id: 'id132',
    imgURL:
      'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
    text: 'Evelyn Coffee Table',
  },
  {
    id: 'id133',
    imgURL:
      'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
    text: 'Slope Nomad Leather Sofa',
  },
  {
    id: 'id134',
    imgURL:
      'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
    text: 'Chair and Table',
  },
  {
    id: 'id223',
    imgURL:
      'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
    text: 'Pioneer LHS Chaise Lounger in Grey Colour',
  },
  {
    id: 'id224',
    imgURL:
      'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
    text: 'Precedant Furniture',
  },
  {
    id: 'id225',
    imgURL:
      'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-768x432.jpg',
    text: 'Leverette Upholstered Platform Bed',
  },
  {
    id: 'id226',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/briget-side-table-1582143245.jpg?crop=1.00xw:0.770xh;0,0.129xh&resize=768:*',
    text: 'Briget Accent Table',
  },
  {
    id: 'id227',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rivet-emerly-media-console-1610578756.jpg?crop=1xw:1xh;center,top&resize=768:*',
    text: 'Rivet Emerly Media Console',
  },
  {
    id: 'id228',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drew-barrymore-flower-home-petal-chair-1594829759.jpeg?crop=1xw:1xh;center,top&resize=768:*',
    text: 'Drew Barrymore Flower Home Accent Chair',
  },
  {
    id: 'id229',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/goodee-ecobirdy-charlie-chairs-1594834221.jpg?crop=1xw:1xh;center,top&resize=768:*',
    text: 'Ecobirdy Charlie Chair',
  },
  {
    id: 'id230',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hailey-sofa-1571430947.jpg?crop=0.481xw:0.722xh;0.252xw,0.173xh&resize=768:*',
    text: 'Hailey Sofa',
  },
  {
    id: 'id231',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/archer-home-designs-dining-table-1594830125.jpg?crop=0.657xw:1.00xh;0.0986xw,0&resize=768:*',
    text: 'Farmhouse Dining Table',
  },
  {
    id: 'id232',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/evelyn-coffee-table-1610578857.jpeg?crop=1xw:1xh;center,top&resize=768:*',
    text: 'Evelyn Coffee Table',
  },
  {
    id: 'id233',
    imgURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burrow-nomad-sofa-1594837995.jpg?crop=1xw:1xh;center,top&resize=768:*',
    text: 'Slope Nomad Leather Sofa',
  },
  {
    id: 'id234',
    imgURL:
      'https://apicms.thestar.com.my/uploads/images/2020/02/21/570850.jpg',
    text: 'Chair and Table',
  },
];
const FurnitureCard: FC<{item: Furniture}> = ({item}) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);

  return (
    <View key={item.id} style={{marginTop: 12, marginHorizontal: 4, flex: 1}}>
      <Image
        source={{uri: item.imgURL}}
        style={{
          height: randomBool ? 150 : 280,
          alignSelf: 'stretch',
        }}
        resizeMode="cover"
      />
      <Text
        style={{
          marginTop: 8,
        }}>
        {item.text}
      </Text>
    </View>
  );
};

const Hunt: FC = () => {
  const [search, setSearch] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const renderItem = ({
    item,
  }: {
    item: Furniture;
    index?: number;
  }): ReactElement => {
    return <FurnitureCard item={item} />;
  };

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
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={{height: '90%'}}>
          <MasonryList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item: Furniture): string => item.id}
            ListHeaderComponent={<View />}
            contentContainerStyle={{
              paddingHorizontal: 10,
              paddingBottom: 50,
              alignSelf: 'stretch',
            }}
            numColumns={2}
            data={data}
            renderItem={renderItem}
          />
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
