import React from 'react';
import {View, FlatList, Text, Dimensions, Image} from 'react-native';
const {width, height} = Dimensions.get('window');
const roundSize = height * 0.1;
const ph_Height = height * 0.15;
const ph_Width = width * 0.27;
const Dashboard = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{flex: 0.2, justifyContent: 'center', backgroundColor: 'white'}}>
        <FlatList
          style={{marginHorizontal: 5}}
          contentContainerStyle={{alignItems: 'center'}}
          data={[1, 1, 1, 1]}
          horizontal
          inverted
          ListHeaderComponent={
            <View style={{width: roundSize, marginLeft: 10}}>
              <Image
                style={{
                  height: roundSize,
                  width: roundSize,
                  borderRadius: roundSize,
                }}
                source={require('../assets/plusIcon.png')}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  textAlign: 'center',
                  fontSize: 14,
                }}>
                Find/add friends
              </Text>
            </View>
          }
          renderItem={({item, index}) => (
            <View style={{width: roundSize, marginLeft: 10}}>
              <Image
                style={{
                  height: roundSize,
                  width: roundSize,
                  borderRadius: roundSize,
                }}
                source={require('../assets/profile6.jpeg')}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  textAlign: 'center',
                  fontSize: 14,
                }}>
                Find/add friends
              </Text>
            </View>
          )}
        />
      </View>
      <View style={{flex: 0.4}}>
        <Text
          style={{
            marginTop: 15,
            marginHorizontal: 5,
            marginVertical: 5,
            fontSize: 16,
            fontWeight: '600',
          }}>
          Recently Treasured
        </Text>
        <FlatList
          data={[1, 1, 1, 1]}
          horizontal
          style={{marginHorizontal: 5}}
          renderItem={({item, index}) => (
            <Image
              style={{
                height: ph_Height,
                width: ph_Width,
                marginLeft: 2,
              }}
              source={require('../assets/profile6.jpeg')}
            />
          )}
        />
      </View>
      <View style={{flex: 0.4, backgroundColor: 'white'}}>
        <Text
          style={{
            marginTop: 15,
            marginHorizontal: 5,
            marginVertical: 5,
            fontSize: 16,
            fontWeight: '600',
          }}>
          Most Treasured
        </Text>
        <FlatList
          data={[1, 1, 1, 1]}
          horizontal
          style={{marginHorizontal: 5}}
          renderItem={({item, index}) => (
            <Image
              style={{
                height: ph_Height,
                width: ph_Width,
                marginLeft: 2,
              }}
              source={require('../assets/profile6.jpeg')}
            />
          )}
        />
      </View>
    </View>
  );
};
export default Dashboard;
