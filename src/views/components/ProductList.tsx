import React, {memo, useMemo} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
type Props = {
  type?: number;
  headerText: string;
  data: any[];
};
const ProductList = ({type = 1, headerText, data}: Props) => {
  const navigation = useNavigation();
  const backgroundColorMemo = useMemo(
    () => (type === 1 ? '#f2f2f2' : 'white'),
    [type],
  );
  return (
    <View
      style={{
        backgroundColor: backgroundColorMemo,
        width: '100%',
        height: height / 4,
      }}>
      <Text style={styles.HeaderView}>{headerText}</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginHorizontal: 5}}
        renderItem={({item, index}) => (
          <View style={{marginLeft: 2, marginRight: 2, width: width * 0.28}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductPage')}>
              <Image
                style={{
                  height: 125,
                  width: '100%',
                  resizeMode: 'cover',
                }}
                source={{uri: item.imageUrl}}
              />
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
  );
};
export default memo(ProductList);
const styles = StyleSheet.create({
  HeaderView: {
    marginTop: 15,
    marginHorizontal: 5,
    marginVertical: 5,
    fontSize: 18,
    fontWeight: '200',
    fontFamily: 'Playfair Display',
  },
});
