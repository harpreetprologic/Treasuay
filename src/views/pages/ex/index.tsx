import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
const Call = () => {
  const [list, setList] = useState([
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
  ]);
  return (
    <View style={{flex: 0.5}}>
      <SwiperFlatList
        index={2}
        showPagination
        data={list}
        renderItem={({item}) => (
          <Image
            source={{uri: item.imageUrl}}
            style={{height: '100%', width: width}}
          />
        )}
        paginationStyleItem={{marginTop: 40}}
        paginationActiveColor={'black'}
      />
    </View>
  );
};
export default Call;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  child: {width, justifyContent: 'center'},
  text: {fontSize: width * 0.5, textAlign: 'center'},
});
