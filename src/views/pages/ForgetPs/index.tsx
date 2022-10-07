import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import IconsBack from 'react-native-vector-icons/AntDesign';
import {useNavigation, NavigationContainer} from '@react-navigation/native';

const ForgotPassword = () => {
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={{padding: 12, flex: 1}}>
      <View style={{padding: 12, flex: 1}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Otp')}
          style={{
            // borderWidth: 1,
            width: '13%',
            height: '6%',
            marginRight: 5,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e1e1e1',
          }}
          hitSlop={{left: 10, top: 10, right: 10, bottom: 10}}>
          <IconsBack name="left" size={22} color="black" />
        </TouchableOpacity>
        <View
          style={{
            marginTop: 50,
            borderBottomWidth: 2,
            width: '50%',
            borderBottomColor: 'black',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Set New Password
          </Text>
        </View>
        {/* <Text style={{marginTop: 50, fontSize: 19}}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter Your Email"
        /> */}
        <Text style={{marginTop: 20, fontSize: 19}}>Old password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter Your old password"
        />
        <Text style={{marginTop: 20, fontSize: 19}}>New password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNewPassword}
          value={newpassword}
          placeholder="Enter Your new password"
        />
        <TouchableOpacity
          style={{
            marginTop: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            borderRadius: 30,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ForgotPassword;
const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 10,

    padding: 10,
    borderBottomWidth: 1,
  },
});
