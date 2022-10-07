import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  AppRegistry,
  SafeAreaView,
  Dimensions,
  Image,
  SafeAreaViewBase,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import {Alert} from 'native-base';

const {width, height} = Dimensions.get('window');

const Internet = () => {
  const [myNetInfo, setmyNetInfo] = useState({});

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      // console.log("Connection type", state.type);
      // console.log("Is connected?", state.isConnected);
      console.log(state);
      setmyNetInfo(state);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (myNetInfo.isConnected) {
    return null;
  }

  return (
    <View style={styles.Container}>
      <View
        style={{
          flex: 0.6,
          // marginTop: 200,
          justifyContent: 'flex-end',
          paddingBottom: 40,
        }}>
        <Image
          style={{
            alignSelf: 'center',
          }}
          source={require('../../../assets/icons/noInternet.png')}></Image>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>
          No Internet Connection !
        </Text>
        <View style={{padding: 19, alignItems: 'center'}}>
          <Text style={{fontSize: 16, fontWeight: '400'}}>
            Your internet connection is down.Please fix
          </Text>
          <Text style={{fontSize: 16, fontWeight: '400'}}>
            it and then you can continue using
          </Text>
          <Text style={{fontSize: 16, fontWeight: '500'}}>TREASURY!</Text>
        </View>
      </View>
      {/* <Text>Type={myNetInfo.type}</Text>
      <Text>
        isConnected = {myNetInfo.isConnected ? 'connect' : 'disconnect'}
      </Text> */}

      <TouchableOpacity
        style={{
          width: '80%',
          height: 48,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          borderRadius: 30,
          alignSelf: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
          Retry
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Internet;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 12,

    position: 'absolute',
    width,
    height,
    backgroundColor: '#fff',
  },
});
