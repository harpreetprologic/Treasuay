import React, {useRef, useState, useEffect} from 'react';
import {Text} from 'native-base';
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import IconsBack from 'react-native-vector-icons/AntDesign';
import {scale} from 'react-native-size-matters';
import OTPTextView from 'react-native-otp-textinput';

const Otp = () => {
  const [otp, setOtp] = React.useState('');
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: '#f5c542', flex: 0.5}}>
        <View style={{padding: 12}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RecoveryPassword')}
            style={{
              width: '13%',
              height: 40,
              marginRight: 5,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#e1e1e1',
            }}
            hitSlop={{left: 10, top: 10, right: 10, bottom: 10}}>
            <IconsBack name="left" size={27} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',

            width: '100%',
          }}>
          <Image
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              // marginTop: 10,
            }}
            source={require('../../../assets/images/logo.png')}></Image>
        </View>
      </View>
      <View
        style={{
          flex: 0.55,
          padding: 12,
          paddingTop: 40,
        }}>
        <View style={{flex: 0.26, alignItems: 'center'}}>
          <Text style={{fontSize: 22, fontWeight: '500'}}>
            Please enter your Verification pin
          </Text>
          <Text style={{fontSize: 15, marginTop: 10, color: '#505050'}}>
            We have sent a verification pin to your registered
          </Text>
          <Text style={{fontSize: 15, marginTop: 3, color: '#505050'}}>
            email ID
          </Text>
        </View>

        <OTPTextView
          textInputStyle={{borderWidth: 2}}
          tintColor={'black'}
          offTintColor={'grey'}
          containerStyle={{width: '80%', alignSelf: 'center', margin: 15}}
          handleTextChange={setOtp}
        />

        <View
          style={{
            alignSelf: 'center',
            flex: 0.2,

            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '300', fontSize: 18}}>
            Didn't receive Pin?
          </Text>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: 'black',
              margin: 2,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 18,
                color: 'black',
              }}>
              Resend Pin
            </Text>
          </View>
        </View>
        <View style={{flex: 0.2, width: '100%', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            style={{
              width: '90%',
              borderWidth: 1,
              height: 44,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'black',

              alignSelf: 'center',
              borderRadius: 30,
            }}>
            <Text
              style={{fontWeight: 'bold', color: 'white', fontSize: scale(16)}}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Otp;
