import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Share from 'react-native-share';
const Call = () => {
  const swiperRef = useRef(null);
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
  const ShareButton = () => {
    const options = {
      title: 'Share file',
      failOnCancel: false,
      urls: [list[swiperRef?.current.getCurrentIndex()].imageUrl],
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.5}}>
        <SwiperFlatList
          ref={swiperRef}
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
      <TouchableOpacity
        onPress={ShareButton}
        style={{marginTop: 50, borderWidth: 2, backgroundColor: 'red'}}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          share
        </Text>
      </TouchableOpacity>
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
