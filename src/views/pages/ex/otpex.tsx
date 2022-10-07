import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../redux/action/login';
import {useNavigation} from '@react-navigation/native';
import OTPTextView from 'react-native-otp-textinput';
const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const loginData = useSelector(state => state.loginReducer);
  const [otp, setOtp] = React.useState('');
  console.log('loginData', loginData);
  const hiiLogin = () => {
    console.log('OTP', otp);
    if (!email) {
      alert('Please enter email');
      return;
    }
    if (!password) {
      alert('Please enter password');
      return;
    }
    try {
      dispatch(loginAction(email, password));
      navigation.navigate('Home');
    } catch (error) {}
  };
  return (
    <View style={{flex: 1, padding: 12}}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 18,
          fontWeight: '700',
          marginBottom: 10,
        }}>
        {loginData.email}
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 18,
          fontWeight: '700',
          marginBottom: 10,
        }}>
        {loginData.password}
      </Text>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          marginTop: 50,
          alignSelf: 'center',
        }}>
        Login
      </Text>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          marginTop: 50,
        }}>
        Email
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter your email"
      />
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          marginTop: 10,
        }}>
        Password
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter your password"
      />
      <TouchableOpacity
        style={{
          borderWidth: 1,
          height: 30,
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
        }}
        onPress={hiiLogin}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
      </TouchableOpacity>
      <OTPTextView
        textInputStyle={{borderWidth: 2}}
        tintColor={'black'}
        offTintColor={'grey'}
        containerStyle={{width: '80%', alignSelf: 'center', marginTop: 15}}
        handleTextChange={setOtp}
      />
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
  },
});
